angular.module('AngularScaffold.Controllers')
  .controller('loginController', ['$state','$scope', 'loginService', 'indexService','AuthService', '$rootScope', '$sessionStorage',
   function ($state,$scope, loginService, indexService, authService, $rootScope, $sessionStorage) {
  	  indexService.setTitle("Distribuidora DC");
      //$scope.goadmin = function(){
      //  $state.go('admin');
      //}
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      $scope.boollog = false;

      $scope.login = function(user){
          authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          //console.log("QUE?1111");
          //console.log($sessionStorage.currentUser.scope);
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
          $scope.boollog = true;
        });
        if($sessionStorage.length != 0){
            //console.log("QUE?2222");
            $state.go('admin');
        }else{
          alert("Error");
        }
      }

  }]);

  //angular.module('AngularScaffold.Controllers')
  //  .controller('NavbarController', ['AuthService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {
