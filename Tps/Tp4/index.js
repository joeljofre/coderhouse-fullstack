var primerNombre;
var segundoNombre ='pepe';
var	edad = 14;

var	persona = {
	nombre: 'marcelo',
	edad: 14;
}

var listado = [2,3,5 'hola',{ apellido:'zapaia' }];


var flag = true;
var flag = 'pepe';

var suma = function (numeroUno,numeroDos){
	var resultado = numeroUno + numeroDos
	return resultado; 
}

var resultado = suma(5,6)

console.log(resultado);

// VALOR Y REFERENCIA

var modificar = function (variable){
	//console.log(variable)
	variable.nombre = 'test';
}

/*var otraCosa = 'pepe'
modificar(otraCosa)*/

var otroObj = {
	nombre: 'carlos'
}

console.log(otroObj);
modificar (otroObj);
console.log(otroObj);

var juan = 'juan';
var duplicado = nombre;

var juan = {nombre:'juan',edad:15};
var objDuplicado = juan;
var persona = {
	nombre:'marcelo',
	apellido: 'zapaia',
	edad: 14,
	getFullName:function(){
		return this.nombre + '' + this.apellido
	}
}

var Persona = function(nombre,apellido){
	this.nombre = nombre;
	this.apellido = apellido;
	this.adad = 15; 
}




var r = new Persona ('Ramon','Perez');
var c = new Persona ('Ramon','Perez');