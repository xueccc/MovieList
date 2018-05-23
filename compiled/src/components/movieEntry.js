"use strict";

var MovieEntry = function MovieEntry(props) {
  return React.createElement(
    "div",
    { className: "movie" },
    props.movie.title,
    React.createElement(
      "button",
      { className: "watchedEntry greenBtn", type: "button", value: props.movie.title,
        onClick: props.toggleWatched
      },
      "Watched"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllRW50cnkuanN4Il0sIm5hbWVzIjpbIk1vdmllRW50cnkiLCJwcm9wcyIsIm1vdmllIiwidGl0bGUiLCJ0b2dnbGVXYXRjaGVkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDMUIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLE9BQWY7QUFBd0JBLFVBQU1DLEtBQU4sQ0FBWUMsS0FBcEM7QUFDQTtBQUFBO0FBQUEsUUFBUSxXQUFVLHVCQUFsQixFQUEwQyxNQUFLLFFBQS9DLEVBQXdELE9BQU9GLE1BQU1DLEtBQU4sQ0FBWUMsS0FBM0U7QUFDQyxpQkFBU0YsTUFBTUc7QUFEaEI7QUFBQTtBQUFBO0FBREEsR0FERjtBQVFELENBVEQiLCJmaWxlIjoibW92aWVFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUVudHJ5ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPntwcm9wcy5tb3ZpZS50aXRsZX1cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdGNoZWRFbnRyeSBncmVlbkJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT17cHJvcHMubW92aWUudGl0bGV9XG4gICAgIG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZVdhdGNoZWR9XG4gICAgID5cbiAgICAgIFdhdGNoZWQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ==