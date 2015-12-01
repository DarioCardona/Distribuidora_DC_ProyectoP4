var app = angular.module('AngularScaffold', ['ui.router', 'AngularScaffold.Services', 'AngularScaffold.Controllers', 'ngRoute']);
var highcharts = angular.module('highcharts', ["highcharts-ng"]);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', '$routeProvider', function($stateProvider, $urlRouterProvider, $routeProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'loginController',
            name: "login",
            data: {
              pageTitle: 'Distribuidora de Carros'
            }
        })
				.state('charts', {
            url: '/DEI',
            templateUrl: '/views/charts.html',
            controller: 'chartsController',
            data: {
              pageTitle: 'Distribuidora de Carros - Graficas'
            }
        })
				.state('abono', {
            url: '/abono',
            templateUrl: '/views/abono.html',
            controller: 'abonoController',
            data: {
              pageTitle: 'Distribuidora de Carros - Abonos'
            }
        })
				.state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller: 'adminController',
            data: {
              pageTitle: 'Distribuidora de Carros - Bienvenido'
            }
        })
        .state('facturacion', {
        		url: '/facturacion',
            templateUrl: '/views/facturacion.html',
            controller: 'facturacionController',
            data: {
              pageTitle: 'Distribuidora de Carros - Facturas'
            }
        })
        .state('compras', {
            url: '/compras',
            templateUrl: '/views/compras.html',
            controller: 'comprasController',
            data: {
              pageTitle: 'Distribuidora de Carros - Compras'
            }
        })
				.state('devo', {
            url: '/Devoluciones',
            templateUrl: '/views/devo.html',
            controller: 'devoController',
            data: {
              pageTitle: 'Distribuidora de Carros - Devoluciones'
            }
        })
        .state('index', {
            url: '/index',
            templateUrl: '/index.html',
            controller: 'indexController'
        })

        $routeProvider
            .when('/compras', {template: 'views/compras.html', controller: 'comprasController'})
            .when('/facturacion', {template: '/views/facturacion.html', controller: 'facturacionController'})
            .when('/abono', {template: '/views/abono.html', controller: 'abonoController'});
}]);

app.run(function($rootScope, $state) {
  $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    $rootScope.title = $route.current.title;
  });
  $rootScope.$state = $state;
});

app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'Distribuidora de Carros - Bienvenido!';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function() {
            element.text(title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);
