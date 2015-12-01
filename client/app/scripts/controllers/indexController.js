angular.module('AngularScaffold.Controllers')
  .controller('indexController', ['$state','$scope', 'indexService', function ($state,$scope, indexService) {
  	$scope.boolLogOut = false;
  	$scope.gofacturacion = function(){
  		$state.go('facturacion');
    }
    $scope.logOut = function(){
      $state.go('login');
    }

    $scope.gograficas = function(){
      $state.go('charts');
    }

    $scope.godevoluciones = function(){
      $state.go('devo');
    }

    $scope.goabonos = function(){
      $state.go('abono');
    }

    $scope.indexService = indexService;

     $scope.checkPage = function(){
     	if ($state.current.name !== "login") 
     		$scope.boolLogOut = true;
	   return $scope.boolLogOut;
	 };
  }]);
