"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieEntry = function (_React$Component) {
  _inherits(MovieEntry, _React$Component);

  function MovieEntry(props) {
    _classCallCheck(this, MovieEntry);

    return _possibleConstructorReturn(this, (MovieEntry.__proto__ || Object.getPrototypeOf(MovieEntry)).call(this, props));
  }

  _createClass(MovieEntry, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var movieName = this.props.movie.title;
      var movieDetails = this.props.movie.displayDetails ? React.createElement(MovieDetails, { movie: this.props.movie, toggleWatched: this.props.toggleWatched }) : null;
      var classname = this.props.movie.displayDetails ? "movie greenBtn" : "movie";
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: classname, value: this.props.movie.title,
            onClick: function onClick() {
              return _this2.props.displayDetails(movieName);
            }
          },
          this.props.movie.title,
          " "
        ),
        movieDetails
      );
    }
  }]);

  return MovieEntry;
}(React.Component);

var MovieDetails = function MovieDetails(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "ul",
      { className: "movieDetailsList" },
      React.createElement(
        "li",
        null,
        "Year: 1995"
      ),
      React.createElement(
        "li",
        null,
        "Runtime: 107min"
      ),
      React.createElement(
        "li",
        null,
        "Metascore: 46 "
      ),
      React.createElement(
        "li",
        null,
        "Watched: ",
        React.createElement("button", { className: "watchedEntry", type: "button", value: props.movie.title,
          onClick: props.toggleWatched })
      )
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJwcm9wcyIsIm1vdmllTmFtZSIsIm1vdmllIiwidGl0bGUiLCJtb3ZpZURldGFpbHMiLCJkaXNwbGF5RGV0YWlscyIsInRvZ2dsZVdhdGNoZWQiLCJjbGFzc25hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk1vdmllRGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG1IQUNWQSxLQURVO0FBRWpCOzs7OzZCQUNRO0FBQUE7O0FBQ1AsVUFBSUMsWUFBWSxLQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLEtBQWpDO0FBQ0EsVUFBSUMsZUFBZSxLQUFLSixLQUFMLENBQVdFLEtBQVgsQ0FBaUJHLGNBQWpCLEdBQ2pCLG9CQUFDLFlBQUQsSUFBYyxPQUFPLEtBQUtMLEtBQUwsQ0FBV0UsS0FBaEMsRUFBdUMsZUFBZSxLQUFLRixLQUFMLENBQVdNLGFBQWpFLEdBRGlCLEdBRWYsSUFGSjtBQUdBLFVBQUlDLFlBQVksS0FBS1AsS0FBTCxDQUFXRSxLQUFYLENBQWlCRyxjQUFqQixHQUFrQyxnQkFBbEMsR0FBcUQsT0FBckU7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVdFLFNBQWhCLEVBQTJCLE9BQU8sS0FBS1AsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxLQUFuRDtBQUNFLHFCQUFTO0FBQUEscUJBQUksT0FBS0gsS0FBTCxDQUFXSyxjQUFYLENBQTBCSixTQUExQixDQUFKO0FBQUE7QUFEWDtBQUVFLGVBQUtELEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkMsS0FGbkI7QUFBQTtBQUFBLFNBRkY7QUFLSUM7QUFMSixPQURGO0FBVUQ7Ozs7RUFwQnNCSSxNQUFNQyxTOztBQXdCL0IsSUFBSUMsZUFBZSxTQUFmQSxZQUFlLENBQUNWLEtBQUQsRUFBVztBQUM1QixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVUsa0JBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFhLHdDQUFRLFdBQVUsY0FBbEIsRUFBaUMsTUFBSyxRQUF0QyxFQUErQyxPQUFPQSxNQUFNRSxLQUFOLENBQVlDLEtBQWxFO0FBQ2IsbUJBQVNILE1BQU1NLGFBREY7QUFBYjtBQUpGO0FBREYsR0FERjtBQVdELENBWkQiLCJmaWxlIjoibW92aWVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7IFxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgbW92aWVOYW1lID0gdGhpcy5wcm9wcy5tb3ZpZS50aXRsZTtcbiAgICB2YXIgbW92aWVEZXRhaWxzID0gdGhpcy5wcm9wcy5tb3ZpZS5kaXNwbGF5RGV0YWlscyA/IChcbiAgICAgIDxNb3ZpZURldGFpbHMgbW92aWU9e3RoaXMucHJvcHMubW92aWV9IHRvZ2dsZVdhdGNoZWQ9e3RoaXMucHJvcHMudG9nZ2xlV2F0Y2hlZH0vPlxuICAgICkgOiBudWxsO1xuICAgIHZhciBjbGFzc25hbWUgPSB0aGlzLnByb3BzLm1vdmllLmRpc3BsYXlEZXRhaWxzID8gXCJtb3ZpZSBncmVlbkJ0blwiIDogXCJtb3ZpZVwiO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWV9IHZhbHVlPXt0aGlzLnByb3BzLm1vdmllLnRpdGxlfVxuICAgICAgICAgIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmRpc3BsYXlEZXRhaWxzKG1vdmllTmFtZSl9XG4gICAgICAgID57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX0gPC9kaXY+XG4gICAgICAgICB7bW92aWVEZXRhaWxzfVxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxudmFyIE1vdmllRGV0YWlscyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibW92aWVEZXRhaWxzTGlzdFwiPlxuICAgICAgICA8bGk+WWVhcjogMTk5NTwvbGk+XG4gICAgICAgIDxsaT5SdW50aW1lOiAxMDdtaW48L2xpPlxuICAgICAgICA8bGk+TWV0YXNjb3JlOiA0NiA8L2xpPlxuICAgICAgICA8bGk+V2F0Y2hlZDogPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXRjaGVkRW50cnlcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9e3Byb3BzLm1vdmllLnRpdGxlfVxuICAgICAgICBvbkNsaWNrPXtwcm9wcy50b2dnbGVXYXRjaGVkfT48L2J1dHRvbj48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ==