"use strict";

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
      searchItem: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "onChange",
    value: function onChange(event) {
      this.setState({ searchItem: event.target.value });
    }
  }, {
    key: "onClick",
    value: function onClick() {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h1",
            null,
            "MovieList"
          )
        ),
        React.createElement(Search, { onChange: this.onChange, onClick: this.onClick }),
        React.createElement(MovieList, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaEl0ZW0iLCJvbkNoYW5nZSIsImJpbmQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWTtBQURELEtBQWI7QUFHQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUxpQjtBQU1sQjs7Ozs2QkFFUUMsSyxFQUFNO0FBQ2IsV0FBS0MsUUFBTCxDQUFjLEVBQUNKLFlBQVlHLE1BQU1FLE1BQU4sQ0FBYUMsS0FBMUIsRUFBZDtBQUNEOzs7OEJBQ1c7QUFDVkgsWUFBTUksY0FBTjtBQUVEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZCLFNBREY7QUFFRSw0QkFBQyxNQUFELElBQVEsVUFBVSxLQUFLTixRQUF2QixFQUFpQyxTQUFTLEtBQUtPLE9BQS9DLEdBRkY7QUFHRSw0QkFBQyxTQUFEO0FBSEYsT0FERjtBQU9EOzs7O0VBMUJlQyxNQUFNQyxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hJdGVtOiAnJ1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBvbkNoYW5nZShldmVudCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoSXRlbTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgICBvbkNsaWNrKCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPjxoMT5Nb3ZpZUxpc3Q8L2gxPjwvZGl2PlxuICAgICAgICA8U2VhcmNoIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9Lz5cbiAgICAgICAgPE1vdmllTGlzdCAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9O1xuXG59XG4iXX0=