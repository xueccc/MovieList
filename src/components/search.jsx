class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="search"> 
        <form action="search">
          <input type="text" placeholder="Search" 
          onChange={this.props.onChangeSearch}></input>
          <button type="button"
          onClick={this.props.onClickSearch}
          >Go!</button>
        </form>
      </div>
    )
  }
}
jdhfsdk
