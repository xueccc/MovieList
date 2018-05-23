var MovieEntry = (props) => {
  return (
    <div className="movie">{props.movie.title}
    <button className="watchedEntry greenBtn" type="button" value={props.movie.title}
     onClick={props.toggleWatched}
     >
      Watched</button>
    </div>
  )
}