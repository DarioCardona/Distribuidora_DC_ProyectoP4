angular.module('AngularScaffold.Controllers')
  .controller('adminController', ['$state','$scope', 'adminService', function ($state,$scope, adminService) {

      $scope.gousuario = function(){
        $state.go('usuario');
        }

        $scope.goabono = function(){
          $state.go('abono');
          }

          $scope.gotocharts = function(){
            $state.go('charts');
          }

  }]);