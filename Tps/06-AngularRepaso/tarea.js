var mod = angular.module('tareaApp',['ui.router']);

mod.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('uno',{
		url:'/u',
		templateUrl:'templates/SeccionUno.html',
		controller:'SeccionUnoCtrl'

	});

	$stateProvider.state('dos',{
		url:'/d',
		templateUrl:'templates/SeccionDos.html',
		controller:'SeccionDosCtrl'
	});

	$urlRouterProvider.otherwise('/u');

});

// Controllers

 //seccion Uno
mod.controller('SeccionUnoCtrl',function($scope){
	$scope.saludo ='Soy la seccion uno';
	$scope.cambiarEstado= function(nombreDeEstado){
		$state.go(nombreDeEstado);
	}
});

 //seccion Dos
mod.controller('SeccionDosCtrl',function($scope,$http){
	$scope.busqueda = '';

	$scope.buscar = function(){
		var url = 'https://api.mercadolibre.com/sites/MLA/search?q='+ $scope.busqueda +'&limit=10';
		$http.get(url).then(function(respuestaDelServidor){
		//console.log(r)
		$scope.resultado = respuestaDelServidor.data.result;
		})
	}
	$scope.saludo = 'Soy la seccion dos';
});


//tambien de esta forma 
//module.controller('seccionDosCtrl',function($scope){})