class Search extends React.Component {

  // constructor() {

  // onClick(event) {
  //   event.preventDefault();
  //   console.log(event);
  // }

 
  render () {
    return (
      <div className="search"> 
        <form action="search">
          <input type="text" placeholder="searching..."></input>
          <input type="submit"
            onClick="console.log('testing')"
          >Go!</input>
        </form>
      </div>
    );
  }
}

