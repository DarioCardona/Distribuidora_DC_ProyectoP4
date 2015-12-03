angular.module('AngularScaffold.Controllers')
  .controller('loginController', ['$state','$scope', 'loginService', 'indexService', '$rootScope', '$sessionStorage',
   function ($state,$scope, loginService, indexService, $rootScope, $sessionStorage) {

  	indexService.setTitle("Distribuidora DC");
      /*$scope.goadmin = function(){
        $state.go('admin');
      }*/
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


  }]);

  //angular.module('AngularScaffold.Controllers')
  //  .controller('NavbarController', ['AuthService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {
