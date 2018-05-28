class MovieEntry extends React.Component{ 
  constructor(props){
    super(props);
  }
  render() {
    var movieName = this.props.movie.title;
    var movieDetails = this.props.movie.displayDetails ? (
      <MovieDetails movie={this.props.movie} toggleWatched={this.props.toggleWatched}/>
    ) : null;
    var classname = this.props.movie.displayDetails ? "movie greenBtn" : "movie";
    return (
      <div>
      
        <div className={classname} value={this.props.movie.title}
          onClick={()=>this.props.displayDetails(movieName)}
        >{this.props.movie.title} </div>
         {movieDetails}
      
      </div>
    );
  }
}


var MovieDetails = (props) => {
  return (
    <div>
      <ul className="movieDetailsList">
        <li>Year: 1995</li>
        <li>Runtime: 107min</li>
        <li>Metascore: 46 </li>
        <li>Watched: <button className="watchedEntry" type="button" value={props.movie.title}
        onClick={props.toggleWatched}></button></li>
      </ul>
    </div>
  )
}