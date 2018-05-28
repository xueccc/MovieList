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
      allMovies: [],
      addMovie: '',
      toggleWatch: '',
      displayWatchedMovies: false
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
      this.setState({ addMovie: { title: event.target.value, watched: false, displayDetails: false } });
    }
  }, {
    key: 'onClickAddMovie',
    value: function onClickAddMovie() {
      var movieList = this.state.allMovies;
      movieList.push(this.state.addMovie);
      this.setState({ collections: movieList, allMovies: movieList });
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

    //filter  

  }, {
    key: 'filterMovieList',
    value: function filterMovieList(e) {
      if (e.target.name === "Watched") {
        var movieList = this.state.allMovies.filter(function (movie) {
          return movie.watched === true;
        });
        this.setState({ collections: movieList });
      }
      if (e.target.name === "toWatch") {
        var movieList = this.state.allMovies.filter(function (movie) {
          return movie.watched === false;
        });
        this.setState({ collections: movieList });
      }
    }

    //displayDetails

  }, {
    key: 'displayDetails',
    value: function displayDetails(movieName) {
      var movieList = this.state.collections;
      movieList.forEach(function (movie) {
        if (movie.title === movieName) {
          if (movie.displayDetails === true) {
            movie.displayDetails = false;
          } else {
            movie.displayDetails = true;
          }
        }
      });
      this.setState({ collections: movieList });
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
          'div',
          null,
          React.createElement(
            'button',
            { className: 'watched', name: 'Watched', type: 'button',
              onClick: this.filterMovieList.bind(this)
            },
            'Watched'
          ),
          React.createElement(
            'button',
            { className: 'towatch', name: 'toWatch', type: 'button',
              onClick: this.filterMovieList.bind(this)
            },
            'To watch'
          )
        ),
        React.createElement(MovieList, { movieList: this.state.collections,
          toggleWatched: this.toggleWatched.bind(this),
          displayDetails: this.displayDetails.bind(this)
        })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaEl0ZW0iLCJjb2xsZWN0aW9ucyIsImFsbE1vdmllcyIsImFkZE1vdmllIiwidG9nZ2xlV2F0Y2giLCJkaXNwbGF5V2F0Y2hlZE1vdmllcyIsImV2ZW50IiwibW92aWVXYXRjaGVkIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibW92aWVMaXN0IiwiaSIsImxlbmd0aCIsInRpdGxlIiwid2F0Y2hlZCIsInNldFN0YXRlIiwiZGlzcGxheURldGFpbHMiLCJwdXNoIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXJlZE1vdmllcyIsImZpbHRlciIsIm1vdmllIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImUiLCJuYW1lIiwibW92aWVOYW1lIiwiZm9yRWFjaCIsImhhbmRsZUFkZE1vdmllIiwiYmluZCIsIm9uQ2xpY2tBZGRNb3ZpZSIsIm9uQ2hhbmdlU2VhcmNoIiwib25DbGlja1NlYXJjaCIsImZpbHRlck1vdmllTGlzdCIsInRvZ2dsZVdhdGNoZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUREO0FBRVhDLG1CQUFhLEVBRkY7QUFHWEMsaUJBQVcsRUFIQTtBQUlYQyxnQkFBVSxFQUpDO0FBS1hDLG1CQUFhLEVBTEY7QUFNWEMsNEJBQXNCO0FBTlgsS0FBYjtBQUZpQjtBQVVsQjs7QUFFRDs7Ozs7a0NBQ2NDLEssRUFBTTtBQUNsQixVQUFJQyxlQUFlRCxNQUFNRSxNQUFOLENBQWFDLEtBQWhDO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUosWUFBWjtBQUNBLFVBQUlLLFlBQVksS0FBS2IsS0FBTCxDQUFXRSxX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QUFDRSx5QkFBZSxLQUFLbUMsYUFBTCxDQUFtQkwsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FEakI7QUFFRSwwQkFBZ0IsS0FBS2IsY0FBTCxDQUFvQmEsSUFBcEIsQ0FBeUIsSUFBekI7QUFGbEI7QUFkRixPQURGO0FBcUJEOzs7O0VBdEhlTSxNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hJdGVtOiAnJyxcbiAgICAgIGNvbGxlY3Rpb25zOiBbXSxcbiAgICAgIGFsbE1vdmllczogW10sXG4gICAgICBhZGRNb3ZpZTogJycsXG4gICAgICB0b2dnbGVXYXRjaDogJycsXG4gICAgICBkaXNwbGF5V2F0Y2hlZE1vdmllczogZmFsc2VcbiAgICB9XG4gIH1cbiAgXG4gIC8vdG9nZ2xlIHdhdGNoZWRcbiAgdG9nZ2xlV2F0Y2hlZChldmVudCl7XG4gICAgdmFyIG1vdmllV2F0Y2hlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhtb3ZpZVdhdGNoZWQpO1xuICAgIHZhciBtb3ZpZUxpc3QgPSB0aGlzLnN0YXRlLmNvbGxlY3Rpb25zO1xuICAgXG4gICAgZm9yKHZhciBpPTA7IGk8bW92aWVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobW92aWVMaXN0W2ldLnRpdGxlID09PSBtb3ZpZVdhdGNoZWQpIHtcbiAgICAgICAgaWYgKG1vdmllTGlzdFtpXS53YXRjaGVkKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtb3ZpZUxpc3RbaV0udGl0bGUsICdjaGFuZ2UgdG8gZmFsc2UnKTtcbiAgICAgICAgICBtb3ZpZUxpc3RbaV0ud2F0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1vdmllTGlzdFtpXS50aXRsZSwgJ2NoYW5nZSB0byB0cnVlJyk7XG4gICAgICAgICAgbW92aWVMaXN0W2ldLndhdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9hZGQgbW92aWUgdG8gbGlzdFxuICBoYW5kbGVBZGRNb3ZpZShldmVudCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWRkTW92aWU6IHt0aXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlLCB3YXRjaGVkOmZhbHNlLCBkaXNwbGF5RGV0YWlsczpmYWxzZX19KTtcbiAgfVxuICBcbiAgb25DbGlja0FkZE1vdmllKCl7XG4gICAgdmFyIG1vdmllTGlzdCA9IHRoaXMuc3RhdGUuYWxsTW92aWVzO1xuICAgIG1vdmllTGlzdC5wdXNoKHRoaXMuc3RhdGUuYWRkTW92aWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxlY3Rpb25zOiBtb3ZpZUxpc3QsIGFsbE1vdmllczogbW92aWVMaXN0fSk7XG4gIH1cbiAgXG4gIFxuICAvL3NlYXJjaCBtb3ZpZXNcbiAgb25DaGFuZ2VTZWFyY2goZXZlbnQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaEl0ZW06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIG9uQ2xpY2tTZWFyY2goKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICB2YXIgZmlsdGVyZWRNb3ZpZXMgPSB0aGlzLnN0YXRlLmNvbGxlY3Rpb25zLmZpbHRlcihtb3ZpZSA9PlxuICAgICAgbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaEl0ZW0udG9Mb3dlckNhc2UoKSlcbiAgICApXG4gICAgaWYgKGZpbHRlcmVkTW92aWVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBmaWx0ZXJlZE1vdmllcyA9IFt7dGl0bGU6ICdubyBtb3ZpZSBieSB0aGF0IG5hbWUgZm91bmQnfV07XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGVjdGlvbnM6IGZpbHRlcmVkTW92aWVzfSk7XG5cbiAgICBcbiAgfVxuXG5cbiAgLy9maWx0ZXIgIFxuICBmaWx0ZXJNb3ZpZUxpc3QoZSkge1xuICAgIGlmIChlLnRhcmdldC5uYW1lID09PSBcIldhdGNoZWRcIil7XG4gICAgICB2YXIgbW92aWVMaXN0ID0gdGhpcy5zdGF0ZS5hbGxNb3ZpZXMuZmlsdGVyKChtb3ZpZSk9PntcbiAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZCA9PT0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICB0aGlzLnNldFN0YXRlKHtjb2xsZWN0aW9uczogbW92aWVMaXN0fSk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5uYW1lID09PSBcInRvV2F0Y2hcIil7XG4gICAgICB2YXIgbW92aWVMaXN0ID0gdGhpcy5zdGF0ZS5hbGxNb3ZpZXMuZmlsdGVyKChtb3ZpZSk9PntcbiAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZCA9PT0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGVjdGlvbnM6IG1vdmllTGlzdH0pO1xuICAgIH1cbiAgfVxuXG4gLy9kaXNwbGF5RGV0YWlsc1xuIGRpc3BsYXlEZXRhaWxzKG1vdmllTmFtZSkge1xuICB2YXIgbW92aWVMaXN0ID0gdGhpcy5zdGF0ZS5jb2xsZWN0aW9ucztcbiAgbW92aWVMaXN0LmZvckVhY2goKG1vdmllKT0+e1xuICAgIGlmIChtb3ZpZS50aXRsZSA9PT0gbW92aWVOYW1lKSB7XG4gICAgICBpZiAobW92aWUuZGlzcGxheURldGFpbHMgPT09IHRydWUpIHtcbiAgICAgICAgbW92aWUuZGlzcGxheURldGFpbHMgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdmllLmRpc3BsYXlEZXRhaWxzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHRoaXMuc2V0U3RhdGUoe2NvbGxlY3Rpb25zOiBtb3ZpZUxpc3R9KTtcbiAgXG4gfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPjxoMT5Nb3ZpZUxpc3Q8L2gxPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclwiPlxuICAgICAgICA8QWRkTW92aWUgYWRkTW92aWU9e3RoaXMuaGFuZGxlQWRkTW92aWUuYmluZCh0aGlzKX0gYWRkQnRuPXt0aGlzLm9uQ2xpY2tBZGRNb3ZpZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8U2VhcmNoIG9uQ2hhbmdlU2VhcmNoPXt0aGlzLm9uQ2hhbmdlU2VhcmNoLmJpbmQodGhpcyl9IG9uQ2xpY2tTZWFyY2g9e3RoaXMub25DbGlja1NlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdGNoZWRcIiBuYW1lPVwiV2F0Y2hlZFwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZmlsdGVyTW92aWVMaXN0LmJpbmQodGhpcyl9XG4gICAgICAgID5XYXRjaGVkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG93YXRjaFwiIG5hbWU9XCJ0b1dhdGNoXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5maWx0ZXJNb3ZpZUxpc3QuYmluZCh0aGlzKX1cbiAgICAgICAgPlRvIHdhdGNoPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllTGlzdD17dGhpcy5zdGF0ZS5jb2xsZWN0aW9uc30gXG4gICAgICAgICAgdG9nZ2xlV2F0Y2hlZD17dGhpcy50b2dnbGVXYXRjaGVkLmJpbmQodGhpcyl9IFxuICAgICAgICAgIGRpc3BsYXlEZXRhaWxzPXt0aGlzLmRpc3BsYXlEZXRhaWxzLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH07XG5cbn1cblxuXG4iXX0=