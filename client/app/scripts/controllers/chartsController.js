var highcharts = angular.module('highcharts', ["highcharts-ng"]);

angular.module('AngularScaffold.Controllers')
  .controller('chartsController', ['$state','$scope', 'chartsService', function ($state,$scope, chartsService) {
    var factData = [{Total: 750, Dia: 01},{Total: 921, Dia: 02},{Total: 50, Dia: 03},{Total: 310, Dia: 04},{Total: 230, Dia: 05},{Total: 1050, Dia: 06},{Total: 0, Dia: 07},{Total: 750, Dia: 09},{Total: 2050, Dia: 10}];
    var myseries = [];
    for(var i = 0; i < factData.length; i++){
      myseries.push([factData[i].Dia,factData[i].Total]);
    }
    $(function () {
      $('#chart1').highcharts({
        chart: {
           type: 'line'
       },
       title: {
           text: 'Ventas por Dia'
       },
       xAxis: {
         title: {
           text: "Dias"
         }
       },
       yAxis: {
           title: {
               text: 'Cantidad (Lps.)'
           }
       },
       series: [{
          name: 'Ventas',
          data: myseries
       }]
      });
    });
    var factData2 = [{Total: 754, Dia: 01},{Total: 121, Dia: 02},{Total: 450, Dia: 03},{Total: 210, Dia: 04},{Total: 2130, Dia: 05},{Total: 1050, Dia: 06},{Total: 0, Dia: 07},{Total: 750, Dia: 09},{Total: 2050, Dia: 10}];
    var myseries2 = [];
    for(var i = 0; i < factData.length; i++){
      myseries2.push([factData2[i].Dia,factData2[i].Total]);
    }
    $(function () {
      $('#chart2').highcharts({
        chart: {
           type: 'line'
       },
       title: {
           text: 'Ventas por Mes'
       },
       xAxis: {
         title: {
           text: "Mes"
         }
       },
       yAxis: {
           title: {
               text: 'Cantidad (Lps.)'
           }
       },
       series: [{
          name: 'Ventas',
          data: myseries2
       }]
      });
    });
  }]);
