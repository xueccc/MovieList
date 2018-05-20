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
      collections: [],
      addMovie: ''
      // this.onChangeSearch = this.onChangeSearch.bind(this);
      // this.onClickSearch = this.onClickSearch.bind(this);
    };return _this;
  }

  //add movie to list


  _createClass(App, [{
    key: 'handleAddMovie',
    value: function handleAddMovie(event) {
      this.setState({ addMovie: { title: event.target.value } });
    }
  }, {
    key: 'onClickAddMovie',
    value: function onClickAddMovie() {
      var movieList = this.state.collections;
      movieList.push(this.state.addMovie);
      console.log(movieList);
      // debugger;
      this.setState({ collections: movieList });
    }

    //search movies

  }, {
    key: 'onChangeSearch',
    value: function onChangeSearch(event) {
      this.setState({ searchItem: event.target.value });
    }
  }, {
    key: 'onClickSearch',
    value: function onClickSearch() {
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
        React.createElement(AddMovie, { addMovie: this.handleAddMovie.bind(this), addBtn: this.onClickAddMovie.bind(this) }),
        React.createElement(Search, { onChangeSearch: this.onChangeSearch.bind(this), onClickSearch: this.onClickSearch.bind(this) }),
        React.createElement(MovieList, { movieList: this.state.collections })
      );
    }
  }]);

  return App;
}(React.Component);

var movies = [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }];

window.movies = movies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaEl0ZW0iLCJjb2xsZWN0aW9ucyIsImFkZE1vdmllIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRpdGxlIiwidGFyZ2V0IiwidmFsdWUiLCJtb3ZpZUxpc3QiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyZWRNb3ZpZXMiLCJmaWx0ZXIiLCJtb3ZpZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJoYW5kbGVBZGRNb3ZpZSIsImJpbmQiLCJvbkNsaWNrQWRkTW92aWUiLCJvbkNoYW5nZVNlYXJjaCIsIm9uQ2xpY2tTZWFyY2giLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1vdmllcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUREO0FBRVhDLG1CQUFhLEVBRkY7QUFHWEMsZ0JBQVU7QUFFWjtBQUNBO0FBTmEsS0FBYixDQUZpQjtBQVNsQjs7QUFFRDs7Ozs7bUNBQ2VDLEssRUFBTTtBQUNuQixXQUFLQyxRQUFMLENBQWMsRUFBQ0YsVUFBVSxFQUFDRyxPQUFPRixNQUFNRyxNQUFOLENBQWFDLEtBQXJCLEVBQVgsRUFBZDtBQUNEOzs7c0NBRWdCO0FBQ2YsVUFBSUMsWUFBWSxLQUFLVCxLQUFMLENBQVdFLFdBQTNCO0FBQ0FPLGdCQUFVQyxJQUFWLENBQWUsS0FBS1YsS0FBTCxDQUFXRyxRQUExQjtBQUNBUSxjQUFRQyxHQUFSLENBQVlILFNBQVo7QUFDQTtBQUNBLFdBQUtKLFFBQUwsQ0FBYyxFQUFDSCxhQUFhTyxTQUFkLEVBQWQ7QUFDRDs7QUFHRDs7OzttQ0FDZUwsSyxFQUFNO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSixZQUFZRyxNQUFNRyxNQUFOLENBQWFDLEtBQTFCLEVBQWQ7QUFDRDs7O29DQUNlO0FBQUE7O0FBQ2RKLFlBQU1TLGNBQU47O0FBRUEsVUFBSUMsaUJBQWlCLEtBQUtkLEtBQUwsQ0FBV0UsV0FBWCxDQUF1QmEsTUFBdkIsQ0FBOEI7QUFBQSxlQUNqREMsTUFBTVYsS0FBTixDQUFZVyxXQUFaLEdBQTBCQyxRQUExQixDQUFtQyxPQUFLbEIsS0FBTCxDQUFXQyxVQUFYLENBQXNCZ0IsV0FBdEIsRUFBbkMsQ0FEaUQ7QUFBQSxPQUE5QixDQUFyQjtBQUdBLFVBQUlILGVBQWVLLE1BQWYsS0FBMEIsQ0FBOUIsRUFBZ0M7QUFDOUJMLHlCQUFpQixDQUFDLEVBQUNSLE9BQU8sNkJBQVIsRUFBRCxDQUFqQjtBQUNEOztBQUVELFdBQUtELFFBQUwsQ0FBYyxFQUFDSCxhQUFhWSxjQUFkLEVBQWQ7QUFDRDs7OzZCQUdRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QixTQURGO0FBRUUsNEJBQUMsUUFBRCxJQUFVLFVBQVUsS0FBS00sY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBcEIsRUFBb0QsUUFBUSxLQUFLQyxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUE1RCxHQUZGO0FBR0UsNEJBQUMsTUFBRCxJQUFRLGdCQUFnQixLQUFLRSxjQUFMLENBQW9CRixJQUFwQixDQUF5QixJQUF6QixDQUF4QixFQUF3RCxlQUFlLEtBQUtHLGFBQUwsQ0FBbUJILElBQW5CLENBQXdCLElBQXhCLENBQXZFLEdBSEY7QUFJRSw0QkFBQyxTQUFELElBQVcsV0FBVyxLQUFLckIsS0FBTCxDQUFXRSxXQUFqQztBQUpGLE9BREY7QUFRRDs7OztFQXJEZXVCLE1BQU1DLFM7O0FBMER4QixJQUFJQyxTQUFTLENBQ1gsRUFBQ3JCLE9BQU8sWUFBUixFQURXLEVBRVgsRUFBQ0EsT0FBTyxTQUFSLEVBRlcsRUFHWCxFQUFDQSxPQUFPLFVBQVIsRUFIVyxFQUlYLEVBQUNBLE9BQU8sVUFBUixFQUpXLEVBS1gsRUFBQ0EsT0FBTyxZQUFSLEVBTFcsQ0FBYjs7QUFRQXNCLE9BQU9ELE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hJdGVtOiAnJyxcbiAgICAgIGNvbGxlY3Rpb25zOiBbXSxcbiAgICAgIGFkZE1vdmllOiAnJ1xuICAgIH1cbiAgICAvLyB0aGlzLm9uQ2hhbmdlU2VhcmNoID0gdGhpcy5vbkNoYW5nZVNlYXJjaC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMub25DbGlja1NlYXJjaCA9IHRoaXMub25DbGlja1NlYXJjaC5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICAvL2FkZCBtb3ZpZSB0byBsaXN0XG4gIGhhbmRsZUFkZE1vdmllKGV2ZW50KXtcbiAgICB0aGlzLnNldFN0YXRlKHthZGRNb3ZpZToge3RpdGxlOiBldmVudC50YXJnZXQudmFsdWV9fSk7XG4gIH1cbiAgXG4gIG9uQ2xpY2tBZGRNb3ZpZSgpe1xuICAgIHZhciBtb3ZpZUxpc3QgPSB0aGlzLnN0YXRlLmNvbGxlY3Rpb25zO1xuICAgIG1vdmllTGlzdC5wdXNoKHRoaXMuc3RhdGUuYWRkTW92aWUpO1xuICAgIGNvbnNvbGUubG9nKG1vdmllTGlzdCk7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGVjdGlvbnM6IG1vdmllTGlzdH0pO1xuICB9XG4gIFxuICBcbiAgLy9zZWFyY2ggbW92aWVzXG4gIG9uQ2hhbmdlU2VhcmNoKGV2ZW50KXtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hJdGVtOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuICBvbkNsaWNrU2VhcmNoKCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgdmFyIGZpbHRlcmVkTW92aWVzID0gdGhpcy5zdGF0ZS5jb2xsZWN0aW9ucy5maWx0ZXIobW92aWUgPT5cbiAgICAgIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2hJdGVtLnRvTG93ZXJDYXNlKCkpXG4gICAgKVxuICAgIGlmIChmaWx0ZXJlZE1vdmllcy5sZW5ndGggPT09IDApe1xuICAgICAgZmlsdGVyZWRNb3ZpZXMgPSBbe3RpdGxlOiAnbm8gbW92aWUgYnkgdGhhdCBuYW1lIGZvdW5kJ31dO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxlY3Rpb25zOiBmaWx0ZXJlZE1vdmllc30pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj48aDE+TW92aWVMaXN0PC9oMT48L2Rpdj5cbiAgICAgICAgPEFkZE1vdmllIGFkZE1vdmllPXt0aGlzLmhhbmRsZUFkZE1vdmllLmJpbmQodGhpcyl9IGFkZEJ0bj17dGhpcy5vbkNsaWNrQWRkTW92aWUuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPFNlYXJjaCBvbkNoYW5nZVNlYXJjaD17dGhpcy5vbkNoYW5nZVNlYXJjaC5iaW5kKHRoaXMpfSBvbkNsaWNrU2VhcmNoPXt0aGlzLm9uQ2xpY2tTZWFyY2guYmluZCh0aGlzKX0vPlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllTGlzdD17dGhpcy5zdGF0ZS5jb2xsZWN0aW9uc30vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9O1xuXG59XG5cblxudmFyIG1vdmllcyA9IFtcbiAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxuICB7dGl0bGU6ICdIYWNrZXJzJ30sXG4gIHt0aXRsZTogJ1RoZSBHcmV5J30sXG4gIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG4gIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbl07XG5cbndpbmRvdy5tb3ZpZXMgPSBtb3ZpZXM7XG4iXX0=