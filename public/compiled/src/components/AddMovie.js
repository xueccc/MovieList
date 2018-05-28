"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddMovie = function (_React$Component) {
  _inherits(AddMovie, _React$Component);

  function AddMovie(props) {
    _classCallCheck(this, AddMovie);

    return _possibleConstructorReturn(this, (AddMovie.__proto__ || Object.getPrototypeOf(AddMovie)).call(this, props));
  }

  _createClass(AddMovie, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "addMovie" },
        React.createElement(
          "form",
          null,
          React.createElement("input", { type: "text", placeholder: "Add movie title here",
            onChange: this.props.addMovie
          }),
          React.createElement(
            "button",
            { className: "greenBtn", type: "button",
              onClick: this.props.addBtn
            },
            "Add"
          )
        )
      );
    }
  }]);

  return AddMovie;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsInByb3BzIiwiYWRkTW92aWUiLCJhZGRCdG4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFFSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxzQkFBL0I7QUFDQSxzQkFBVSxLQUFLQSxLQUFMLENBQVdDO0FBRHJCLFlBREY7QUFLRTtBQUFBO0FBQUEsY0FBUSxXQUFVLFVBQWxCLEVBQTZCLE1BQUssUUFBbEM7QUFDQSx1QkFBUyxLQUFLRCxLQUFMLENBQVdFO0FBRHBCO0FBQUE7QUFBQTtBQUxGO0FBREYsT0FERjtBQWFEOzs7O0VBcEJvQkMsTUFBTUMsUyIsImZpbGUiOiJBZGRNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFkZE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkTW92aWVcIj4gXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIG1vdmllIHRpdGxlIGhlcmVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmFkZE1vdmllfVxuICAgICAgICAgID5cbiAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ3JlZW5CdG5cIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmFkZEJ0bn1cbiAgICAgICAgICA+QWRkPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=