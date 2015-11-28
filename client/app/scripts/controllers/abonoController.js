angular.module('AngularScaffold.Controllers')
  .controller('abonoController', ['$state','$scope', 'abonoService', function ($state,$scope, abonoService) {

      $scope.goadmin = function(){
        $state.go('admin');
        }

  }]);
