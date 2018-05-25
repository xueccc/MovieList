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
      this.setState({ addMovie: { title: event.target.value, watched: false } });
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
        ),
        React.createElement(MovieList, { movieList: this.state.collections, toggleWatched: this.toggleWatched.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaEl0ZW0iLCJjb2xsZWN0aW9ucyIsImFsbE1vdmllcyIsImFkZE1vdmllIiwidG9nZ2xlV2F0Y2giLCJkaXNwbGF5V2F0Y2hlZE1vdmllcyIsImV2ZW50IiwibW92aWVXYXRjaGVkIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibW92aWVMaXN0IiwiaSIsImxlbmd0aCIsInRpdGxlIiwid2F0Y2hlZCIsInNldFN0YXRlIiwicHVzaCIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVyZWRNb3ZpZXMiLCJmaWx0ZXIiLCJtb3ZpZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJlIiwibmFtZSIsImhhbmRsZUFkZE1vdmllIiwiYmluZCIsIm9uQ2xpY2tBZGRNb3ZpZSIsIm9uQ2hhbmdlU2VhcmNoIiwib25DbGlja1NlYXJjaCIsImZpbHRlck1vdmllTGlzdCIsInRvZ2dsZVdhdGNoZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUREO0FBRVhDLG1CQUFhLEVBRkY7QUFHWEMsaUJBQVcsRUFIQTtBQUlYQyxnQkFBVSxFQUpDO0FBS1hDLG1CQUFhLEVBTEY7QUFNWEMsNEJBQXNCO0FBTlgsS0FBYjtBQUZpQjtBQVVsQjs7QUFFRDs7Ozs7a0NBQ2NDLEssRUFBTTtBQUNsQixVQUFJQyxlQUFlRCxNQUFNRSxNQUFOLENBQWFDLEtBQWhDO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUosWUFBWjtBQUNBLFVBQUlLLFlBQVksS0FBS2IsS0FBTCxDQUFXRSxXQUEzQjs7QUFFQSxXQUFJLElBQUlZLElBQUUsQ0FBVixFQUFhQSxJQUFF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LENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUE1RCxHQURBO0FBRUEsOEJBQUMsTUFBRCxJQUFRLGdCQUFnQixLQUFLRSxjQUFMLENBQW9CRixJQUFwQixDQUF5QixJQUF6QixDQUF4QixFQUF3RCxlQUFlLEtBQUtHLGFBQUwsQ0FBbUJILElBQW5CLENBQXdCLElBQXhCLENBQXZFO0FBRkEsU0FGRjtBQU1FO0FBQUE7QUFBQSxZQUFRLFdBQVUsU0FBbEIsRUFBNEIsTUFBSyxTQUFqQyxFQUEyQyxNQUFLLFFBQWhEO0FBQ0UscUJBQVMsS0FBS0ksZUFBTCxDQUFxQkosSUFBckIsQ0FBMEIsSUFBMUI7QUFEWDtBQUFBO0FBQUEsU0FORjtBQVNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsU0FBbEIsRUFBNEIsTUFBSyxTQUFqQyxFQUEyQyxNQUFLLFFBQWhEO0FBQ0UscUJBQVMsS0FBS0ksZUFBTCxDQUFxQkosSUFBckIsQ0FBMEIsSUFBMUI7QUFEWDtBQUFBO0FBQUEsU0FURjtBQVlFLDRCQUFDLFNBQUQsSUFBVyxXQUFXLEtBQUs3QixLQUFMLENBQVdFLFdBQWpDLEVBQThDLGVBQWUsS0FBS2dDLGFBQUwsQ0FBbUJMLElBQW5CLENBQXdCLElBQXhCLENBQTdEO0FBWkYsT0FERjtBQWdCRDs7OztFQS9GZU0sTUFBTUMsUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoSXRlbTogJycsXG4gICAgICBjb2xsZWN0aW9uczogW10sXG4gICAgICBhbGxNb3ZpZXM6IFtdLFxuICAgICAgYWRkTW92aWU6ICcnLFxuICAgICAgdG9nZ2xlV2F0Y2g6ICcnLFxuICAgICAgZGlzcGxheVdhdGNoZWRNb3ZpZXM6IGZhbHNlXG4gICAgfVxuICB9XG4gIFxuICAvL3RvZ2dsZSB3YXRjaGVkXG4gIHRvZ2dsZVdhdGNoZWQoZXZlbnQpe1xuICAgIHZhciBtb3ZpZVdhdGNoZWQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2cobW92aWVXYXRjaGVkKTtcbiAgICB2YXIgbW92aWVMaXN0ID0gdGhpcy5zdGF0ZS5jb2xsZWN0aW9ucztcbiAgIFxuICAgIGZvcih2YXIgaT0wOyBpPG1vdmllTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1vdmllTGlzdFtpXS50aXRsZSA9PT0gbW92aWVXYXRjaGVkKSB7XG4gICAgICAgIGlmIChtb3ZpZUxpc3RbaV0ud2F0Y2hlZCl7XG4gICAgICAgICAgY29uc29sZS5sb2cobW92aWVMaXN0W2ldLnRpdGxlLCAnY2hhbmdlIHRvIGZhbHNlJyk7XG4gICAgICAgICAgbW92aWVMaXN0W2ldLndhdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtb3ZpZUxpc3RbaV0udGl0bGUsICdjaGFuZ2UgdG8gdHJ1ZScpO1xuICAgICAgICAgIG1vdmllTGlzdFtpXS53YXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vYWRkIG1vdmllIHRvIGxpc3RcbiAgaGFuZGxlQWRkTW92aWUoZXZlbnQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2FkZE1vdmllOiB7dGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZSwgd2F0Y2hlZDpmYWxzZX19KTtcbiAgfVxuICBcbiAgb25DbGlja0FkZE1vdmllKCl7XG4gICAgdmFyIG1vdmllTGlzdCA9IHRoaXMuc3RhdGUuYWxsTW92aWVzO1xuICAgIG1vdmllTGlzdC5wdXNoKHRoaXMuc3RhdGUuYWRkTW92aWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxlY3Rpb25zOiBtb3ZpZUxpc3QsIGFsbE1vdmllczogbW92aWVMaXN0fSk7XG4gIH1cbiAgXG4gIFxuICAvL3NlYXJjaCBtb3ZpZXNcbiAgb25DaGFuZ2VTZWFyY2goZXZlbnQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaEl0ZW06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIG9uQ2xpY2tTZWFyY2goKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICB2YXIgZmlsdGVyZWRNb3ZpZXMgPSB0aGlzLnN0YXRlLmNvbGxlY3Rpb25zLmZpbHRlcihtb3ZpZSA9PlxuICAgICAgbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaEl0ZW0udG9Mb3dlckNhc2UoKSlcbiAgICApXG4gICAgaWYgKGZpbHRlcmVkTW92aWVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBmaWx0ZXJlZE1vdmllcyA9IFt7dGl0bGU6ICdubyBtb3ZpZSBieSB0aGF0IG5hbWUgZm91bmQnfV07XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGVjdGlvbnM6IGZpbHRlcmVkTW92aWVzfSk7XG4gIH1cblxuXG4gIC8vZmlsdGVyICBcbiAgZmlsdGVyTW92aWVMaXN0KGUpe1xuICAgIGlmIChlLnRhcmdldC5uYW1lID09PSBcIldhdGNoZWRcIil7XG4gICAgICB2YXIgbW92aWVMaXN0ID0gdGhpcy5zdGF0ZS5hbGxNb3ZpZXMuZmlsdGVyKChtb3ZpZSk9PntcbiAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZCA9PT0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICB0aGlzLnNldFN0YXRlKHtjb2xsZWN0aW9uczogbW92aWVMaXN0fSk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5uYW1lID09PSBcInRvV2F0Y2hcIil7XG4gICAgICB2YXIgbW92aWVMaXN0ID0gdGhpcy5zdGF0ZS5hbGxNb3ZpZXMuZmlsdGVyKChtb3ZpZSk9PntcbiAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZCA9PT0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGVjdGlvbnM6IG1vdmllTGlzdH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPjxoMT5Nb3ZpZUxpc3Q8L2gxPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclwiPlxuICAgICAgICA8QWRkTW92aWUgYWRkTW92aWU9e3RoaXMuaGFuZGxlQWRkTW92aWUuYmluZCh0aGlzKX0gYWRkQnRuPXt0aGlzLm9uQ2xpY2tBZGRNb3ZpZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8U2VhcmNoIG9uQ2hhbmdlU2VhcmNoPXt0aGlzLm9uQ2hhbmdlU2VhcmNoLmJpbmQodGhpcyl9IG9uQ2xpY2tTZWFyY2g9e3RoaXMub25DbGlja1NlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdGNoZWRcIiBuYW1lPVwiV2F0Y2hlZFwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZmlsdGVyTW92aWVMaXN0LmJpbmQodGhpcyl9XG4gICAgICAgID5XYXRjaGVkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG93YXRjaFwiIG5hbWU9XCJ0b1dhdGNoXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5maWx0ZXJNb3ZpZUxpc3QuYmluZCh0aGlzKX1cbiAgICAgICAgPlRvIHdhdGNoPC9idXR0b24+XG4gICAgICAgIDxNb3ZpZUxpc3QgbW92aWVMaXN0PXt0aGlzLnN0YXRlLmNvbGxlY3Rpb25zfSB0b2dnbGVXYXRjaGVkPXt0aGlzLnRvZ2dsZVdhdGNoZWQuYmluZCh0aGlzKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcblxufVxuXG5cbiJdfQ==