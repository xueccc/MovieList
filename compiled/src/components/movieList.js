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
            return React.createElement(MovieEntry, { movie: movie, key: key, toggleWatched: _this2.props.toggleWatched });
          })
        )
      );
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJtb3ZpZUxpc3QiLCJtYXAiLCJtb3ZpZSIsImtleSIsInRvZ2dsZVdhdGNoZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRyxlQUFLQSxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLG1CQUN4QixvQkFBQyxVQUFELElBQVksT0FBT0QsS0FBbkIsRUFBMEIsS0FBS0MsR0FBL0IsRUFBb0MsZUFBZSxPQUFLSixLQUFMLENBQVdLLGFBQTlELEdBRHdCO0FBQUEsV0FBekI7QUFESDtBQURGLE9BREQ7QUFTRDs7OztFQWRxQkMsTUFBTUMsUzs7QUFpQjlCQyxPQUFPVCxTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJtb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcbiAgY29uc3RydWN0b3IocHJvcHMpIHsgXG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3RcIj5cbiAgICAgICA8ZGl2PlxuICAgICAgICAge3RoaXMucHJvcHMubW92aWVMaXN0Lm1hcCgobW92aWUsIGtleSkgPT4gXG4gICAgICAgICAgIDxNb3ZpZUVudHJ5IG1vdmllPXttb3ZpZX0ga2V5PXtrZXl9IHRvZ2dsZVdhdGNoZWQ9e3RoaXMucHJvcHMudG9nZ2xlV2F0Y2hlZH0vPlxuICAgICAgICAgKX1cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4gIFxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDsiXX0=