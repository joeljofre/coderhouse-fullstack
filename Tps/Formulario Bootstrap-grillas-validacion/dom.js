window.addEventListener('load',function(){
	var form = document.querySelector('form');
	var inputNombre = document.querySelector('input[type="Nombre"');

	// inputPassword.addEventListener('keypress',function(){
	// 	console.log(this.value)
	// })

	form.addEventListener('submit',function(elEvento){
		elEvento.preventDefault();
		console.log('test')

		// this.password.addEventListener('keypress',function(){
		// 	console.log('tecla')
		// })

		if(!this.Nombre.value){
			alert('ingrese Nombre')
		}else if(!this.Apellido.value){
			alert('ingrese Apellido')
		}else if(!this.Direccion.value){
			alert('ingrese Direccion')
		}else if(!this.Documento.value){
			alert('ingrese Documento')
		}else if(!this.Telefono.value){
			alert('ingrese Telefono')
		

		}else{
			document.querySelector('div').innerHTML = ' OK '
		}




		

		// muestra info del evento
		// console.log(elEvento);
	})
});