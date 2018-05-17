'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      searchItem: '',
      collections: window.movies
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'onChange',
    value: function onChange(event) {
      this.setState({ searchItem: event.target.value });
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var _this2 = this;

      event.preventDefault();

      var filteredMovies = this.state.collections.filter(function (movie) {
        return movie.title.toLowerCase().includes(_this2.state.searchItem.toLowerCase());
      });
      if (filteredMovies.length === 0) {
        filteredMovies = [{ title: 'no movie by that name found' }];
      }

      this.setState({ collections: filteredMovies });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'title' },
          React.createElement(
            'h1',
            null,
            'MovieList'
          )
        ),
        React.createElement(Search, { onChange: this.onChange, onClick: this.onClick }),
        React.createElement(MovieList, { movieList: this.state.collections })
      );
    }
  }]);

  return App;
}(React.Component);

var movies = [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }];

window.movies = movies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaEl0ZW0iLCJjb2xsZWN0aW9ucyIsIndpbmRvdyIsIm1vdmllcyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uQ2xpY2siLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlcmVkTW92aWVzIiwiZmlsdGVyIiwibW92aWUiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUREO0FBRVhDLG1CQUFhQyxPQUFPQztBQUZULEtBQWI7QUFJQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQVBpQjtBQVFsQjs7Ozs2QkFFUUUsSyxFQUFNO0FBQ2IsV0FBS0MsUUFBTCxDQUFjLEVBQUNSLFlBQVlPLE1BQU1FLE1BQU4sQ0FBYUMsS0FBMUIsRUFBZDtBQUNEOzs7OEJBQ1M7QUFBQTs7QUFDUkgsWUFBTUksY0FBTjs7QUFFQSxVQUFJQyxpQkFBaUIsS0FBS2IsS0FBTCxDQUFXRSxXQUFYLENBQXVCWSxNQUF2QixDQUE4QjtBQUFBLGVBQ2pEQyxNQUFNQyxLQUFOLENBQVlDLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DLE9BQUtsQixLQUFMLENBQVdDLFVBQVgsQ0FBc0JnQixXQUF0QixFQUFuQyxDQURpRDtBQUFBLE9BQTlCLENBQXJCO0FBR0EsVUFBSUosZUFBZU0sTUFBZixLQUEwQixDQUE5QixFQUFnQztBQUM5Qk4seUJBQWlCLENBQUMsRUFBQ0csT0FBTyw2QkFBUixFQUFELENBQWpCO0FBQ0Q7O0FBRUQsV0FBS1AsUUFBTCxDQUFjLEVBQUNQLGFBQWFXLGNBQWQsRUFBZDtBQUNEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZCLFNBREY7QUFFRSw0QkFBQyxNQUFELElBQVEsVUFBVSxLQUFLUixRQUF2QixFQUFpQyxTQUFTLEtBQUtFLE9BQS9DLEdBRkY7QUFHRSw0QkFBQyxTQUFELElBQVcsV0FBVyxLQUFLUCxLQUFMLENBQVdFLFdBQWpDO0FBSEYsT0FERjtBQU9EOzs7O0VBcENla0IsTUFBTUMsUzs7QUF5Q3hCLElBQUlqQixTQUFTLENBQ1gsRUFBQ1ksT0FBTyxZQUFSLEVBRFcsRUFFWCxFQUFDQSxPQUFPLFNBQVIsRUFGVyxFQUdYLEVBQUNBLE9BQU8sVUFBUixFQUhXLEVBSVgsRUFBQ0EsT0FBTyxVQUFSLEVBSlcsRUFLWCxFQUFDQSxPQUFPLFlBQVIsRUFMVyxDQUFiOztBQVFBYixPQUFPQyxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoSXRlbTogJycsXG4gICAgICBjb2xsZWN0aW9uczogd2luZG93Lm1vdmllc1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBvbkNoYW5nZShldmVudCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoSXRlbTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIHZhciBmaWx0ZXJlZE1vdmllcyA9IHRoaXMuc3RhdGUuY29sbGVjdGlvbnMuZmlsdGVyKG1vdmllID0+XG4gICAgICBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoSXRlbS50b0xvd2VyQ2FzZSgpKVxuICAgIClcbiAgICBpZiAoZmlsdGVyZWRNb3ZpZXMubGVuZ3RoID09PSAwKXtcbiAgICAgIGZpbHRlcmVkTW92aWVzID0gW3t0aXRsZTogJ25vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZCd9XTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtjb2xsZWN0aW9uczogZmlsdGVyZWRNb3ZpZXN9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+PGgxPk1vdmllTGlzdDwvaDE+PC9kaXY+XG4gICAgICAgIDxTZWFyY2ggb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uQ2xpY2s9e3RoaXMub25DbGlja30vPlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllTGlzdD17dGhpcy5zdGF0ZS5jb2xsZWN0aW9uc30vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9O1xuXG59XG5cblxudmFyIG1vdmllcyA9IFtcbiAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxuICB7dGl0bGU6ICdIYWNrZXJzJ30sXG4gIHt0aXRsZTogJ1RoZSBHcmV5J30sXG4gIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG4gIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbl07XG5cbndpbmRvdy5tb3ZpZXMgPSBtb3ZpZXM7XG4iXX0=