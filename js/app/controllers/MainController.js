function MainController($scope) {
  $scope.name = 'JENNIFER!';
}

angular
  .module('app')
  .controller('MainController', MainController);