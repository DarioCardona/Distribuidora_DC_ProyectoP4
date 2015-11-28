angular.module('AngularScaffold.Controllers')
  .controller('loginController', ['$state','$scope', 'loginService', function ($state,$scope, loginService) {

      $scope.goadmin = function(){
        $state.go('admin');
        }

  }]);
