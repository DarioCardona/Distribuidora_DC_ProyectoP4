angular.module('AngularScaffold.Controllers')
  .controller('loginController', ['$state','$scope', 'loginService', 'indexService', function ($state,$scope, loginService, indexService) {

  	indexService.setTitle("Distribuidora DC");
      /*$scope.goadmin = function(){
        $state.go('admin');
      }*/
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      
      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


  }]);

  angular.module('AngularScaffold.Controllers')
    .controller('NavbarController', ['AuthService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {
