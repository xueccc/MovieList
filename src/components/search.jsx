class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="search"> 
        <form action="search">
          <input type="text" placeholder="searching..." 
          onChange={this.props.onChange}></input>
          <button type="button"
          onClick={this.props.onClick}
          >Go!</button>
        </form>
      </div>
    );
  }
}

