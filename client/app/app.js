var app = angular.module('AngularScaffold', ['ui.router', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);
var highcharts = angular.module('highcharts', ["highcharts-ng"]);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'loginController'
        })
				.state('charts', {
            url: '/DEI',
            templateUrl: '/views/charts.html',
            controller: 'chartsController'
        })
				.state('admin', {
            url: '/admin',
            templateUrl: '/views/admin.html',
            controller: 'adminController'
        });
}])
