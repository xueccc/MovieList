class MovieList extends React.Component { 
  constructor(props) { 
    super(props);
  }
  render() {
    return (
     <div className="movie-list">
       <div>
         {this.props.movieList.map(movie => 
           <div className="movie">{movie.title}</div>
         )}
       </div>
     </div>
    )
  }
}
  
window.MovieList = MovieList;