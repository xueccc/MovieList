class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: ''
    }
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event){
    this.setState({searchItem: event.target.value});
  }
  onClick() {
    event.preventDefault();  
  }


  render() {
    return (
      <div>
        <div className="title"><h1>MovieList</h1></div>
        <Search onChange={this.onChange} onClick={this.onClick}/>
        <MovieList />
      </div>
    )
  };

}
