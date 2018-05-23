class AddMovie extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="addMovie"> 
        <form>
          <input type="text" placeholder="Add movie title here"
          onChange={this.props.addMovie}
          >
          </input>
          <button className="greenBtn" type="button"
          onClick={this.props.addBtn}
          >Add</button>
        </form>
      </div>
    );
  }
}