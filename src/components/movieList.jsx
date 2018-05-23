class MovieList extends React.Component { 
  constructor(props) { 
    super(props);
  }
  render() {
    return (
     <div className="movie-list">
       <div>
         {this.props.movieList.map((movie, key) => 
           <MovieEntry movie={movie} key={key} toggleWatched={this.props.toggleWatched}/>
         )}
       </div>
     </div>
    )
  }
}
  
window.MovieList = MovieList;