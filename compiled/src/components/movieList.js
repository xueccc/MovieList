"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
  _inherits(MovieList, _React$Component);

  function MovieList(props) {
    _classCallCheck(this, MovieList);

    return _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));
  }

  _createClass(MovieList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "movie-list" },
        React.createElement(
          "div",
          null,
          this.props.movieList.map(function (movie) {
            return React.createElement(
              "div",
              { className: "movie" },
              movie.title
            );
          })
        )
      );
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZUxpc3QiLCJtYXAiLCJtb3ZpZSIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFDUTtBQUNQLGFBQ0M7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0csZUFBS0EsS0FBTCxDQUFXQyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QjtBQUFBLG1CQUN4QjtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQXdCQyxvQkFBTUM7QUFBOUIsYUFEd0I7QUFBQSxXQUF6QjtBQURIO0FBREYsT0FERDtBQVNEOzs7O0VBZHFCQyxNQUFNQyxTOztBQWlCOUJDLE9BQU9SLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3Rvcihwcm9wcykgeyBcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgICAgIDxkaXY+XG4gICAgICAgICB7dGhpcy5wcm9wcy5tb3ZpZUxpc3QubWFwKG1vdmllID0+IFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllXCI+e21vdmllLnRpdGxlfTwvZGl2PlxuICAgICAgICAgKX1cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4gIFxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDsiXX0=