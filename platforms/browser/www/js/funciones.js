$("#miformulario").submit(function(evento){

	evento.preventDefault();

	//console.info("Activando formulario..........");

	//var cadena=$(this).serialize();
	//	console.info(cadena);

	var cadena=$(this).serializeArray();
	console.info(cadena);

	$.ajax({
		url:"http://localhost/prueba.php"
	}).done(function(respuesta){

	});





});