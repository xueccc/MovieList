var MovieList = () => (
    <div className="movie-list">
      <div>
        {movies.map(movie => 
          <div className="movie">{movie.title}</div>
        )}
      </div>
    </div>
)
  


window.MovieList = MovieList;


var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];