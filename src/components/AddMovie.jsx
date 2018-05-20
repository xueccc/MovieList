class AddMovie extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="addMovie"> 
        <form>
          <input type="text" placeholder="add movie title here" 
          onChange={this.props.onChange}></input>
          <button type="button"
          onClick={this.props.onClick}
          >Add</button>
        </form>
      </div>
    );
  }
}