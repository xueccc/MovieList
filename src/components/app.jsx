class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="title"><h1>MovieList</h1></div>
        <Search />
        <MovieList />
      </div>
    )
  };

}
