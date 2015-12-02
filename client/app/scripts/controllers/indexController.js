angular.module('AngularScaffold.Controllers')
  .controller('indexController', ['$state','$scope', 'indexService','navbarService','$rootScope', '$sessionStorage'
  function ($state,$scope, indexService,navbarService, $rootScope, $sessionStorage) {
  	$scope.boolLogOut = false;

    $scope.user = {};
    $scope.$sessionStorage = $sessionStorage;

    $scope.logout = function(){
      authService.Logout().then(function(response){
        alert('logged out correctly');
        $sessionStorage.$reset();
        $state.go('login');
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      })
    }

  	$scope.gofacturacion = function(){
  		$state.go('facturacion');
    }

    //$scope.logOut = function(){
    //}

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

   $scope.isAdmin = function(){
       return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
   }

   $scope.isRegular = function(){
       return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
   }

  }]);
