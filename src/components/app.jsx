class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      collections: window.movies
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  
  onChange(event){
    this.setState({searchItem: event.target.value});
  }
  onClick() {
    event.preventDefault();
    
    var filteredMovies = this.state.collections.filter(movie =>
      movie.title.toLowerCase().includes(this.state.searchItem.toLowerCase())
    )
    if (filteredMovies.length === 0){
      filteredMovies = [{title: 'no movie by that name found'}];
    }

    this.setState({collections: filteredMovies});
  }


  render() {
    return (
      <div>
        <div className="title"><h1>MovieList</h1></div>
        <Search onChange={this.onChange} onClick={this.onClick}/>
        <MovieList movieList={this.state.collections}/>
      </div>
    )
  };

}


var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

window.movies = movies;
