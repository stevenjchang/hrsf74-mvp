'use strict';

// app.controller("MainController", function($scope){
//     $scope.understand = "I now understand how the scope works!";
// });

// app.controller("MainController", function($scope){
//     $scope.inputValue = "";
// });

app.controller("MainController", function ($scope) {
  $scope.selectedPerson = 0;
  $scope.selectedGenre = null;
  $scope.people = [{ id: 0, name: 'Leon', music: ['Rock', 'Metal', 'Dubstep', 'Electro'] }, { id: 1, name: 'Chris', music: ['Indie', 'Drumstep', 'Dubstep', 'Electro'] }, { id: 2, name: 'Harry', music: ['Rock', 'Metal', 'Thrash Metal', 'Heavy Metal'] }, { id: 3, name: 'Allyce', music: ['Pop', 'RnB', 'Hip Hop'] }];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FuZ3VsYXJKUy9hc3NldHMvbWFpbmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiYXBwIiwiY29udHJvbGxlciIsIiRzY29wZSIsInNlbGVjdGVkUGVyc29uIiwic2VsZWN0ZWRHZW5yZSIsInBlb3BsZSIsImlkIiwibmFtZSIsIm11c2ljIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFBLElBQUlDLFVBQUosQ0FBZSxnQkFBZixFQUFpQyxVQUFTQyxNQUFULEVBQWdCO0FBQy9DQSxTQUFPQyxjQUFQLEdBQXdCLENBQXhCO0FBQ0FELFNBQU9FLGFBQVAsR0FBdUIsSUFBdkI7QUFDQUYsU0FBT0csTUFBUCxHQUFnQixDQUNkLEVBQUVDLElBQUksQ0FBTixFQUFTQyxNQUFNLE1BQWYsRUFBdUJDLE9BQU8sQ0FBRSxNQUFGLEVBQVUsT0FBVixFQUFtQixTQUFuQixFQUE4QixTQUE5QixDQUE5QixFQURjLEVBRWQsRUFBRUYsSUFBSSxDQUFOLEVBQVNDLE1BQU0sT0FBZixFQUF3QkMsT0FBTyxDQUFFLE9BQUYsRUFBVyxVQUFYLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBQS9CLEVBRmMsRUFHZCxFQUFFRixJQUFJLENBQU4sRUFBU0MsTUFBTSxPQUFmLEVBQXdCQyxPQUFPLENBQUUsTUFBRixFQUFVLE9BQVYsRUFBbUIsY0FBbkIsRUFBbUMsYUFBbkMsQ0FBL0IsRUFIYyxFQUlkLEVBQUVGLElBQUksQ0FBTixFQUFTQyxNQUFNLFFBQWYsRUFBeUJDLE9BQU8sQ0FBRSxLQUFGLEVBQVMsS0FBVCxFQUFnQixTQUFoQixDQUFoQyxFQUpjLENBQWhCO0FBTUQsQ0FURCIsImZpbGUiOiJtYWluY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC5jb250cm9sbGVyKFwiTWFpbkNvbnRyb2xsZXJcIiwgZnVuY3Rpb24oJHNjb3BlKXtcbi8vICAgICAkc2NvcGUudW5kZXJzdGFuZCA9IFwiSSBub3cgdW5kZXJzdGFuZCBob3cgdGhlIHNjb3BlIHdvcmtzIVwiO1xuLy8gfSk7XG5cbi8vIGFwcC5jb250cm9sbGVyKFwiTWFpbkNvbnRyb2xsZXJcIiwgZnVuY3Rpb24oJHNjb3BlKXtcbi8vICAgICAkc2NvcGUuaW5wdXRWYWx1ZSA9IFwiXCI7XG4vLyB9KTtcblxuYXBwLmNvbnRyb2xsZXIoXCJNYWluQ29udHJvbGxlclwiLCBmdW5jdGlvbigkc2NvcGUpe1xuICAkc2NvcGUuc2VsZWN0ZWRQZXJzb24gPSAwO1xuICAkc2NvcGUuc2VsZWN0ZWRHZW5yZSA9IG51bGw7XG4gICRzY29wZS5wZW9wbGUgPSBbXG4gICAgeyBpZDogMCwgbmFtZTogJ0xlb24nLCBtdXNpYzogWyAnUm9jaycsICdNZXRhbCcsICdEdWJzdGVwJywgJ0VsZWN0cm8nIF0gfSxcbiAgICB7IGlkOiAxLCBuYW1lOiAnQ2hyaXMnLCBtdXNpYzogWyAnSW5kaWUnLCAnRHJ1bXN0ZXAnLCAnRHVic3RlcCcsICdFbGVjdHJvJyBdIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0hhcnJ5JywgbXVzaWM6IFsgJ1JvY2snLCAnTWV0YWwnLCAnVGhyYXNoIE1ldGFsJywgJ0hlYXZ5IE1ldGFsJyBdIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ0FsbHljZScsIG11c2ljOiBbICdQb3AnLCAnUm5CJywgJ0hpcCBIb3AnIF0gfVxuICBdO1xufSk7Il19