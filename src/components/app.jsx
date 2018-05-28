class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      collections: [],
      allMovies: [],
      addMovie: '',
      toggleWatch: '',
      displayWatchedMovies: false
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
    this.setState({addMovie: {title: event.target.value, watched:false, displayDetails:false}});
  }
  
  onClickAddMovie(){
    var movieList = this.state.allMovies;
    movieList.push(this.state.addMovie);
    this.setState({collections: movieList, allMovies: movieList});
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


  //filter  
  filterMovieList(e) {
    if (e.target.name === "Watched"){
      var movieList = this.state.allMovies.filter((movie)=>{
       return movie.watched === true;
      })
      this.setState({collections: movieList});
    }
    if (e.target.name === "toWatch"){
      var movieList = this.state.allMovies.filter((movie)=>{
       return movie.watched === false;
      })
      this.setState({collections: movieList});
    }
  }

 //displayDetails
 displayDetails(movieName) {
  var movieList = this.state.collections;
  movieList.forEach((movie)=>{
    if (movie.title === movieName) {
      if (movie.displayDetails === true) {
        movie.displayDetails = false;
      } else {
        movie.displayDetails = true;
      }
    }
  })
  this.setState({collections: movieList});
  
 }

  render() {
    return (
      <div>
        <div className="title"><h1>MovieList</h1></div>
        <div className="filter">
        <AddMovie addMovie={this.handleAddMovie.bind(this)} addBtn={this.onClickAddMovie.bind(this)} />
        <Search onChangeSearch={this.onChangeSearch.bind(this)} onClickSearch={this.onClickSearch.bind(this)}/>
        </div>
        <div>
        <button className="watched" name="Watched" type="button"
          onClick={this.filterMovieList.bind(this)}
        >Watched</button>
        <button className="towatch" name="toWatch" type="button"
          onClick={this.filterMovieList.bind(this)}
        >To watch</button>
        </div>
        <MovieList movieList={this.state.collections} 
          toggleWatched={this.toggleWatched.bind(this)} 
          displayDetails={this.displayDetails.bind(this)}
        />
      </div>
    )
  };

}


