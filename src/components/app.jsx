class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      collections: [],
      addMovie: '',
      toggleWatch: ''
    }
  }
  
  //toggle watched
  toggleWatched(event){
    var movieWatched = event.target.value;
    console.log(movieWatched);
    var movieList = this.state.collections;
   
    for(var i=0; i<movieList.length; i++) {
      if (movieList[i].title === movieWatched) {
        if (movieList[i].watched){
          console.log(movieList[i].title, 'change to false');
          movieList[i].watched = false;
        } else {
          console.log(movieList[i].title, 'change to true');
          movieList[i].watched = true;
        }
      }
    }
  }

  //add movie to list
  handleAddMovie(event){
    this.setState({addMovie: {title: event.target.value, watched:false}});
  }
  
  onClickAddMovie(){
    var movieList = this.state.collections;
    movieList.push(this.state.addMovie);
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
        <div className="filter">
        <AddMovie addMovie={this.handleAddMovie.bind(this)} addBtn={this.onClickAddMovie.bind(this)} />
        <Search onChangeSearch={this.onChangeSearch.bind(this)} onClickSearch={this.onClickSearch.bind(this)}/>
        </div>
        <button className="watched" type="button">Watched</button>
        <button className="towatch" type="button">To watch</button>
        <MovieList movieList={this.state.collections} toggleWatched={this.toggleWatched.bind(this)} />
      </div>
    )
  };

}


