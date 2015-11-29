angular.module('AngularScaffold.Controllers')
  .controller('loginController', ['$state','$scope', 'loginService', 'indexService', function ($state,$scope, loginService, indexService) {

  	indexService.setTitle("Distribuidora DC");

      $scope.goadmin = function(){
        $state.go('admin');
        }

  }]);
