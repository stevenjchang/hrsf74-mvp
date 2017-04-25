'use strict';

app.controller('MainController', function ($scope, $http) {
  $scope.result;
  // $scope.inputValue = "heyyy";
  $http.get("http://localhost:3000/teams").then(function (response) {
    console.log('successful from maincontroller .then');
    $scope.result = 'hey hello from inside http';

    $scope.myWelcome = response.data;
  });
});

// app.controller("MainController", function($scope){
//   $scope.selectedPerson = 0;
//   $scope.selectedGenre = null;
//   $scope.people = [
//     { id: 0, name: 'Leon', music: [ 'Rock', 'Metal', 'Dubstep', 'Electro' ] },
//     { id: 1, name: 'Chris', music: [ 'Indie', 'Drumstep', 'Dubstep', 'Electro' ] },
//     { id: 2, name: 'Harry', music: [ 'Rock', 'Metal', 'Thrash Metal', 'Heavy Metal' ] },
//     { id: 3, name: 'Allyce', music: [ 'Pop', 'RnB', 'Hip Hop' ] }
//   ];
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0FuZ3VsYXJKUy9tYWluY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJhcHAiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGh0dHAiLCJyZXN1bHQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibXlXZWxjb21lIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsSUFBSUMsVUFBSixDQUFlLGdCQUFmLEVBQWlDLFVBQVNDLE1BQVQsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ3ZERCxTQUFPRSxNQUFQO0FBQ0E7QUFDRUQsUUFBTUUsR0FBTixDQUFVLDZCQUFWLEVBQ0NDLElBREQsQ0FDTSxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCQyxZQUFRQyxHQUFSLENBQVksc0NBQVo7QUFDQVAsV0FBT0UsTUFBUCxHQUFnQiw0QkFBaEI7O0FBRUVGLFdBQU9RLFNBQVAsR0FBbUJILFNBQVNJLElBQTVCO0FBQ0gsR0FORDtBQU9ILENBVkQ7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsICRodHRwKSB7XG4gICRzY29wZS5yZXN1bHQ7XG4gIC8vICRzY29wZS5pbnB1dFZhbHVlID0gXCJoZXl5eVwiO1xuICAgICRodHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90ZWFtc1wiKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bCBmcm9tIG1haW5jb250cm9sbGVyIC50aGVuJyk7XG4gICAgICAkc2NvcGUucmVzdWx0ID0gJ2hleSBoZWxsbyBmcm9tIGluc2lkZSBodHRwJztcbiAgICAgIFxuICAgICAgICAkc2NvcGUubXlXZWxjb21lID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9KTtcbn0pO1xuXG5cbi8vIGFwcC5jb250cm9sbGVyKFwiTWFpbkNvbnRyb2xsZXJcIiwgZnVuY3Rpb24oJHNjb3BlKXtcbi8vICAgJHNjb3BlLnNlbGVjdGVkUGVyc29uID0gMDtcbi8vICAgJHNjb3BlLnNlbGVjdGVkR2VucmUgPSBudWxsO1xuLy8gICAkc2NvcGUucGVvcGxlID0gW1xuLy8gICAgIHsgaWQ6IDAsIG5hbWU6ICdMZW9uJywgbXVzaWM6IFsgJ1JvY2snLCAnTWV0YWwnLCAnRHVic3RlcCcsICdFbGVjdHJvJyBdIH0sXG4vLyAgICAgeyBpZDogMSwgbmFtZTogJ0NocmlzJywgbXVzaWM6IFsgJ0luZGllJywgJ0RydW1zdGVwJywgJ0R1YnN0ZXAnLCAnRWxlY3RybycgXSB9LFxuLy8gICAgIHsgaWQ6IDIsIG5hbWU6ICdIYXJyeScsIG11c2ljOiBbICdSb2NrJywgJ01ldGFsJywgJ1RocmFzaCBNZXRhbCcsICdIZWF2eSBNZXRhbCcgXSB9LFxuLy8gICAgIHsgaWQ6IDMsIG5hbWU6ICdBbGx5Y2UnLCBtdXNpYzogWyAnUG9wJywgJ1JuQicsICdIaXAgSG9wJyBdIH1cbi8vICAgXTtcbi8vIH0pO1xuXG5cblxuIl19