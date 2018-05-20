class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      collections: [],
      addMovie: ''
    }
    // this.onChangeSearch = this.onChangeSearch.bind(this);
    // this.onClickSearch = this.onClickSearch.bind(this);
  }
  
  //add movie to list
  handleAddMovie(event){
    this.setState({addMovie: {title: event.target.value}});
  }
  
  onClickAddMovie(){
    var movieList = this.state.collections;
    movieList.push(this.state.addMovie);
    console.log(movieList);
    // debugger;
    this.setState({collections: movieList});
  }
  
  
  //search movies
  onChangeSearch(event){
    this.setState({searchItem: event.target.value});
  }
  onClickSearch() {
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
        <AddMovie addMovie={this.handleAddMovie.bind(this)} addBtn={this.onClickAddMovie.bind(this)} />
        <Search onChangeSearch={this.onChangeSearch.bind(this)} onClickSearch={this.onClickSearch.bind(this)}/>
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
