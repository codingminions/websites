(function () {
  'use strict';
  function ctrlPractices($scope, $http) {

    $scope.showDocsNav = false;

    $scope.toggleDocsMenu = function () {
      $scope.showDocsNav = !$scope.showDocsNav;
    };

    $scope.initialization = function () {
      $http.get('json/tools.json')
        .success(function (data, status, headers, config) {
          $scope.tools = data;
          console.log('$scope.tools', $scope.tools);
        })
        .error(function (data, status, headers, config) {
        });
    };
  }

  angular.module('websites').controller('CtrlPractices', ['$scope', '$http', ctrlPractices]);
}());