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
      addMovie: '',
      toggleWatch: ''
    };
    return _this;
  }

  //toggle watched


  _createClass(App, [{
    key: 'toggleWatched',
    value: function toggleWatched(event) {
      var movieWatched = event.target.value;
      console.log(movieWatched);
      var movieList = this.state.collections;

      for (var i = 0; i < movieList.length; i++) {
        if (movieList[i].title === movieWatched) {
          if (movieList[i].watched) {
            console.log(movieList[i].title, 'change to false');
            movieList[i].watched = false;
          } else {
            console.log(movieList[i].title, 'change to true');
            movieList[i].watched = true;
          }
        }
      }
    }

    //add movie to list

  }, {
    key: 'handleAddMovie',
    value: function handleAddMovie(event) {
      this.setState({ addMovie: { title: event.target.value, watched: false } });
    }
  }, {
    key: 'onClickAddMovie',
    value: function onClickAddMovie() {
      var movieList = this.state.collections;
      movieList.push(this.state.addMovie);
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
        React.createElement(
          'div',
          { className: 'filter' },
          React.createElement(AddMovie, { addMovie: this.handleAddMovie.bind(this), addBtn: this.onClickAddMovie.bind(this) }),
          React.createElement(Search, { onChangeSearch: this.onChangeSearch.bind(this), onClickSearch: this.onClickSearch.bind(this) })
        ),
        React.createElement(
          'button',
          { className: 'watched', type: 'button' },
          'Watched'
        ),
        React.createElement(
          'button',
          { className: 'towatch', type: 'button' },
          'To watch'
        ),
        React.createElement(MovieList, { movieList: this.state.collections, toggleWatched: this.toggleWatched.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaEl0ZW0iLCJjb2xsZWN0aW9ucyIsImFkZE1vdmllIiwidG9nZ2xlV2F0Y2giLCJldmVudCIsIm1vdmllV2F0Y2hlZCIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1vdmllTGlzdCIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsIndhdGNoZWQiLCJzZXRTdGF0ZSIsInB1c2giLCJwcmV2ZW50RGVmYXVsdCIsImZpbHRlcmVkTW92aWVzIiwiZmlsdGVyIiwibW92aWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlQWRkTW92aWUiLCJiaW5kIiwib25DbGlja0FkZE1vdmllIiwib25DaGFuZ2VTZWFyY2giLCJvbkNsaWNrU2VhcmNoIiwidG9nZ2xlV2F0Y2hlZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBREQ7QUFFWEMsbUJBQWEsRUFGRjtBQUdYQyxnQkFBVSxFQUhDO0FBSVhDLG1CQUFhO0FBSkYsS0FBYjtBQUZpQjtBQVFsQjs7QUFFRDs7Ozs7a0NBQ2NDLEssRUFBTTtBQUNsQixVQUFJQyxlQUFlRCxNQUFNRSxNQUFOLENBQWFDLEtBQWhDO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUosWUFBWjtBQUNBLFVBQUlLLFlBQVksS0FBS1gsS0FBTCxDQUFXRSxXQUEzQjs7QUFFQSxXQUFJLElBQUlVLElBQUUsQ0FBVixFQUFhQSxJQUFFRCxVQUFVRSxNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDcEMsWUFBSUQsVUFBVUMsQ0FBVixFQUFhRSxLQUFiLEtBQXVCUixZQUEzQixFQUF5QztBQUN2QyxjQUFJSyxVQUFVQyxDQUFWLEVBQWFHLE9BQWpCLEVBQXlCO0FBQ3ZCTixvQkFBUUMsR0FBUixDQUFZQyxVQUFVQyxDQUFWLEVBQWFFLEtBQXpCLEVBQWdDLGlCQUFoQztBQUNBSCxzQkFBVUMsQ0FBVixFQUFhRyxPQUFiLEdBQXVCLEtBQXZCO0FBQ0QsV0FIRCxNQUdPO0FBQ0xOLG9CQUFRQyxHQUFSLENBQVlDLFVBQVVDLENBQVYsRUFBYUUsS0FBekIsRUFBZ0MsZ0JBQWhDO0FBQ0FILHNCQUFVQyxDQUFWLEVBQWFHLE9BQWIsR0FBdUIsSUFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDs7OzttQ0FDZVYsSyxFQUFNO0FBQ25CLFdBQUtXLFFBQUwsQ0FBYyxFQUFDYixVQUFVLEVBQUNXLE9BQU9ULE1BQU1FLE1BQU4sQ0FBYUMsS0FBckIsRUFBNEJPLFNBQVEsS0FBcEMsRUFBWCxFQUFkO0FBQ0Q7OztzQ0FFZ0I7QUFDZixVQUFJSixZQUFZLEtBQUtYLEtBQUwsQ0FBV0UsV0FBM0I7QUFDQVMsZ0JBQVVNLElBQVYsQ0FBZSxLQUFLakIsS0FBTCxDQUFXRyxRQUExQjtBQUNBLFdBQUthLFFBQUwsQ0FBYyxFQUFDZCxhQUFhUyxTQUFkLEVBQWQ7QUFDRDs7QUFHRDs7OzttQ0FDZU4sSyxFQUFNO0FBQ25CLFdBQUtXLFFBQUwsQ0FBYyxFQUFDZixZQUFZSSxNQUFNRSxNQUFOLENBQWFDLEtBQTFCLEVBQWQ7QUFDRDs7O29DQUNlO0FBQUE7O0FBQ2RILFlBQU1hLGNBQU47O0FBRUEsVUFBSUMsaUJBQWlCLEtBQUtuQixLQUFMLENBQVdFLFdBQVgsQ0FBdUJrQixNQUF2QixDQUE4QjtBQUFBLGVBQ2pEQyxNQUFNUCxLQUFOLENBQVlRLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DLE9BQUt2QixLQUFMLENBQVdDLFVBQVgsQ0FBc0JxQixXQUF0QixFQUFuQyxDQURpRDtBQUFBLE9BQTlCLENBQXJCO0FBR0EsVUFBSUgsZUFBZU4sTUFBZixLQUEwQixDQUE5QixFQUFnQztBQUM5Qk0seUJBQWlCLENBQUMsRUFBQ0wsT0FBTyw2QkFBUixFQUFELENBQWpCO0FBQ0Q7O0FBRUQsV0FBS0UsUUFBTCxDQUFjLEVBQUNkLGFBQWFpQixjQUFkLEVBQWQ7QUFDRDs7OzZCQUdRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QixTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0EsOEJBQUMsUUFBRCxJQUFVLFVBQVUsS0FBS0ssY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBcEIsRUFBb0QsUUFBUSxLQUFLQyxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUE1RCxHQURBO0FBRUEsOEJBQUMsTUFBRCxJQUFRLGdCQUFnQixLQUFLRSxjQUFMLENBQW9CRixJQUFwQixDQUF5QixJQUF6QixDQUF4QixFQUF3RCxlQUFlLEtBQUtHLGFBQUwsQ0FBbUJILElBQW5CLENBQXdCLElBQXhCLENBQXZFO0FBRkEsU0FGRjtBQU1FO0FBQUE7QUFBQSxZQUFRLFdBQVUsU0FBbEIsRUFBNEIsTUFBSyxRQUFqQztBQUFBO0FBQUEsU0FORjtBQU9FO0FBQUE7QUFBQSxZQUFRLFdBQVUsU0FBbEIsRUFBNEIsTUFBSyxRQUFqQztBQUFBO0FBQUEsU0FQRjtBQVFFLDRCQUFDLFNBQUQsSUFBVyxXQUFXLEtBQUt6QixLQUFMLENBQVdFLFdBQWpDLEVBQThDLGVBQWUsS0FBSzJCLGFBQUwsQ0FBbUJKLElBQW5CLENBQXdCLElBQXhCLENBQTdEO0FBUkYsT0FERjtBQVlEOzs7O0VBekVlSyxNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hJdGVtOiAnJyxcbiAgICAgIGNvbGxlY3Rpb25zOiBbXSxcbiAgICAgIGFkZE1vdmllOiAnJyxcbiAgICAgIHRvZ2dsZVdhdGNoOiAnJ1xuICAgIH1cbiAgfVxuICBcbiAgLy90b2dnbGUgd2F0Y2hlZFxuICB0b2dnbGVXYXRjaGVkKGV2ZW50KXtcbiAgICB2YXIgbW92aWVXYXRjaGVkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKG1vdmllV2F0Y2hlZCk7XG4gICAgdmFyIG1vdmllTGlzdCA9IHRoaXMuc3RhdGUuY29sbGVjdGlvbnM7XG4gICBcbiAgICBmb3IodmFyIGk9MDsgaTxtb3ZpZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChtb3ZpZUxpc3RbaV0udGl0bGUgPT09IG1vdmllV2F0Y2hlZCkge1xuICAgICAgICBpZiAobW92aWVMaXN0W2ldLndhdGNoZWQpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmllTGlzdFtpXS50aXRsZSwgJ2NoYW5nZSB0byBmYWxzZScpO1xuICAgICAgICAgIG1vdmllTGlzdFtpXS53YXRjaGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cobW92aWVMaXN0W2ldLnRpdGxlLCAnY2hhbmdlIHRvIHRydWUnKTtcbiAgICAgICAgICBtb3ZpZUxpc3RbaV0ud2F0Y2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL2FkZCBtb3ZpZSB0byBsaXN0XG4gIGhhbmRsZUFkZE1vdmllKGV2ZW50KXtcbiAgICB0aGlzLnNldFN0YXRlKHthZGRNb3ZpZToge3RpdGxlOiBldmVudC50YXJnZXQudmFsdWUsIHdhdGNoZWQ6ZmFsc2V9fSk7XG4gIH1cbiAgXG4gIG9uQ2xpY2tBZGRNb3ZpZSgpe1xuICAgIHZhciBtb3ZpZUxpc3QgPSB0aGlzLnN0YXRlLmNvbGxlY3Rpb25zO1xuICAgIG1vdmllTGlzdC5wdXNoKHRoaXMuc3RhdGUuYWRkTW92aWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxlY3Rpb25zOiBtb3ZpZUxpc3R9KTtcbiAgfVxuICBcbiAgXG4gIC8vc2VhcmNoIG1vdmllc1xuICBvbkNoYW5nZVNlYXJjaChldmVudCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoSXRlbTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgb25DbGlja1NlYXJjaCgpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIHZhciBmaWx0ZXJlZE1vdmllcyA9IHRoaXMuc3RhdGUuY29sbGVjdGlvbnMuZmlsdGVyKG1vdmllID0+XG4gICAgICBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoSXRlbS50b0xvd2VyQ2FzZSgpKVxuICAgIClcbiAgICBpZiAoZmlsdGVyZWRNb3ZpZXMubGVuZ3RoID09PSAwKXtcbiAgICAgIGZpbHRlcmVkTW92aWVzID0gW3t0aXRsZTogJ25vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZCd9XTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtjb2xsZWN0aW9uczogZmlsdGVyZWRNb3ZpZXN9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+PGgxPk1vdmllTGlzdDwvaDE+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XG4gICAgICAgIDxBZGRNb3ZpZSBhZGRNb3ZpZT17dGhpcy5oYW5kbGVBZGRNb3ZpZS5iaW5kKHRoaXMpfSBhZGRCdG49e3RoaXMub25DbGlja0FkZE1vdmllLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxTZWFyY2ggb25DaGFuZ2VTZWFyY2g9e3RoaXMub25DaGFuZ2VTZWFyY2guYmluZCh0aGlzKX0gb25DbGlja1NlYXJjaD17dGhpcy5vbkNsaWNrU2VhcmNoLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F0Y2hlZFwiIHR5cGU9XCJidXR0b25cIj5XYXRjaGVkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG93YXRjaFwiIHR5cGU9XCJidXR0b25cIj5UbyB3YXRjaDwvYnV0dG9uPlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllTGlzdD17dGhpcy5zdGF0ZS5jb2xsZWN0aW9uc30gdG9nZ2xlV2F0Y2hlZD17dGhpcy50b2dnbGVXYXRjaGVkLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH07XG5cbn1cblxuXG4iXX0=