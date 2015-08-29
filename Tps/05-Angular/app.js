var mod = angular.module ('myApp',[])

// angular.module ('myApp')
mod.controller('BuscadorCtrl',function($scope){
	$scope.test = 'Hola que tal?';
	$scope.clickBoton = function(){
		console.log('hola' + $scope.nombre);
	}

	$scope.$watch('nombre',function(newValue,oldValue){
		console.log('valor viejo',oldValue);
		console.log('valor nuevo',newValue);

	})
})

/*
mod.controller('LoginCtrl',function($scope){
	scope.validar = function (){
		if(!$scope.email){
			$scope.error ="Necesito el email";
		}else if($scope.email.length <= 3){
			$scope.error = 'El mail es muy corto';
		}else{
			$scope.error
		}
	}
}) 

// angular.module ('myApp')
