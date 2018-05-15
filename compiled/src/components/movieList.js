"use strict";

var MovieList = function MovieList() {
  return React.createElement(
    "div",
    { className: "movie-list" },
    React.createElement(
      "div",
      null,
      movies.map(function (movie) {
        return React.createElement(
          "div",
          { className: "movie" },
          movie.title
        );
      })
    )
  );
};

window.MovieList = MovieList;

var movies = [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwibW92aWVzIiwibWFwIiwibW92aWUiLCJ0aXRsZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNHQyxhQUFPQyxHQUFQLENBQVc7QUFBQSxlQUNWO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUF3QkMsZ0JBQU1DO0FBQTlCLFNBRFU7QUFBQSxPQUFYO0FBREg7QUFERixHQURZO0FBQUEsQ0FBaEI7O0FBWUFDLE9BQU9MLFNBQVAsR0FBbUJBLFNBQW5COztBQUdBLElBQUlDLFNBQVMsQ0FDWCxFQUFDRyxPQUFPLFlBQVIsRUFEVyxFQUVYLEVBQUNBLE9BQU8sU0FBUixFQUZXLEVBR1gsRUFBQ0EsT0FBTyxVQUFSLEVBSFcsRUFJWCxFQUFDQSxPQUFPLFVBQVIsRUFKVyxFQUtYLEVBQUNBLE9BQU8sWUFBUixFQUxXLENBQWIiLCJmaWxlIjoibW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllTGlzdCA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3RcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHttb3ZpZXMubWFwKG1vdmllID0+IFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIj57bW92aWUudGl0bGV9PC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcbiAgXG5cblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDtcblxuXG52YXIgbW92aWVzID0gW1xuICB7dGl0bGU6ICdNZWFuIEdpcmxzJ30sXG4gIHt0aXRsZTogJ0hhY2tlcnMnfSxcbiAge3RpdGxlOiAnVGhlIEdyZXknfSxcbiAge3RpdGxlOiAnU3Vuc2hpbmUnfSxcbiAge3RpdGxlOiAnRXggTWFjaGluYSd9LFxuXTsiXX0=