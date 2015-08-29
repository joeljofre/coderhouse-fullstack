angular.module ('meliApp',['ui.router'])


angular.module ('meliApp').config(function($stateProvider){
	$stateProvider.state('buscador',{
		url:"/",
		templateUrl:"templates/buscador.html"
	})

	$stateProvider.state('resultado',{
		url:"/resultado",
		templateUrl:"templates/resultado.html"
	})

	$urlRouterPorvider.otherwise('/');

})
