app.controller('MainController', function($scope, $http) {

    // $http.get("http://localhost:3000/teams")
    // .then(function(response) {
    //   $scope.hello = 'qTbZU0IUrQI';
    //   $scope.videoLinks = response.data;
    // });

    $scope.submitTeam = function(team) {
      $http.post("http://localhost:3000/teams1", {team: team})
      .then(function(response) {
        $scope.videoLinks = response.data[0].gameLinks.split(',');
        console.log('***** $scope.videoLinks >>maincontroller.js --> ', $scope.videoLinks);
      })
    }
});


