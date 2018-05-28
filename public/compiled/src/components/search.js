"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "search" },
        React.createElement(
          "form",
          { action: "search" },
          React.createElement("input", { type: "text", placeholder: "Search",
            onChange: this.props.onChangeSearch }),
          React.createElement(
            "button",
            { type: "button",
              onClick: this.props.onClickSearch
            },
            "Go!"
          )
        )
      );
    }
  }]);

  return Search;
}(React.Component);

jdhfsdk;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJvbkNoYW5nZVNlYXJjaCIsIm9uQ2xpY2tTZWFyY2giLCJSZWFjdCIsIkNvbXBvbmVudCIsImpkaGZzZGsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBRUosa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU0sUUFBTyxRQUFiO0FBQ0UseUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksUUFBL0I7QUFDQSxzQkFBVSxLQUFLQSxLQUFMLENBQVdDLGNBRHJCLEdBREY7QUFHRTtBQUFBO0FBQUEsY0FBUSxNQUFLLFFBQWI7QUFDQSx1QkFBUyxLQUFLRCxLQUFMLENBQVdFO0FBRHBCO0FBQUE7QUFBQTtBQUhGO0FBREYsT0FERjtBQVdEOzs7O0VBbEJrQkMsTUFBTUMsUzs7QUFvQjNCQyIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj4gXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cInNlYXJjaFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2VTZWFyY2h9PjwvaW5wdXQ+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2tTZWFyY2h9XG4gICAgICAgICAgPkdvITwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmpkaGZzZGtcbiJdfQ==