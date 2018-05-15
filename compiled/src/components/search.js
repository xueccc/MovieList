"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",


    // constructor() {

    // onClick(event) {
    //   event.preventDefault();
    //   console.log(event);
    // }


    value: function render() {
      return React.createElement(
        "div",
        { className: "search" },
        React.createElement(
          "form",
          { action: "search" },
          React.createElement("input", { type: "text", placeholder: "searching..." }),
          React.createElement(
            "input",
            { type: "submit",
              onClick: "console.log('testing')"
            },
            "Go!"
          )
        )
      );
    }
  }]);

  return Search;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7Ozs7Ozs7Ozs7OztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7NkJBR1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFNLFFBQU8sUUFBYjtBQUNFLHlDQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLGNBQS9CLEdBREY7QUFFRTtBQUFBO0FBQUEsY0FBTyxNQUFLLFFBQVo7QUFDRSx1QkFBUTtBQURWO0FBQUE7QUFBQTtBQUZGO0FBREYsT0FERjtBQVVEOzs7O0VBckJrQkMsTUFBTUMsUyIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vIGNvbnN0cnVjdG9yKCkge1xuXG4gIC8vIG9uQ2xpY2soZXZlbnQpIHtcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgLy8gfVxuXG4gXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+IFxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJzZWFyY2hcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInNlYXJjaGluZy4uLlwiPjwvaW5wdXQ+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgb25DbGljaz1cImNvbnNvbGUubG9nKCd0ZXN0aW5nJylcIlxuICAgICAgICAgID5HbyE8L2lucHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiJdfQ==