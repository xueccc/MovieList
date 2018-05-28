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
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "movie-list" },
        React.createElement(
          "div",
          null,
          this.props.movieList.map(function (movie, key) {
            return React.createElement(MovieEntry, { movie: movie, key: key,
              toggleWatched: _this2.props.toggleWatched,
              displayDetails: _this2.props.displayDetails
            });
          })
        )
      );
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZUxpc3QiLCJtYXAiLCJtb3ZpZSIsImtleSIsInRvZ2dsZVdhdGNoZWQiLCJkaXNwbGF5RGV0YWlscyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNDO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNHLGVBQUtBLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsbUJBQ3hCLG9CQUFDLFVBQUQsSUFBWSxPQUFPRCxLQUFuQixFQUEwQixLQUFLQyxHQUEvQjtBQUNBLDZCQUFlLE9BQUtKLEtBQUwsQ0FBV0ssYUFEMUI7QUFFQSw4QkFBZ0IsT0FBS0wsS0FBTCxDQUFXTTtBQUYzQixjQUR3QjtBQUFBLFdBQXpCO0FBREg7QUFERixPQUREO0FBWUQ7Ozs7RUFqQnFCQyxNQUFNQyxTOztBQW9COUJDLE9BQU9WLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICBjb25zdHJ1Y3Rvcihwcm9wcykgeyBcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxuICAgICAgIDxkaXY+XG4gICAgICAgICB7dGhpcy5wcm9wcy5tb3ZpZUxpc3QubWFwKChtb3ZpZSwga2V5KSA9PiBcbiAgICAgICAgICAgPE1vdmllRW50cnkgbW92aWU9e21vdmllfSBrZXk9e2tleX0gXG4gICAgICAgICAgIHRvZ2dsZVdhdGNoZWQ9e3RoaXMucHJvcHMudG9nZ2xlV2F0Y2hlZH1cbiAgICAgICAgICAgZGlzcGxheURldGFpbHM9e3RoaXMucHJvcHMuZGlzcGxheURldGFpbHN9XG4gICAgICAgICAgIC8+XG4gICAgICAgICApfVxuICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiAgXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0OyJdfQ==