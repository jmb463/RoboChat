var n_json = 1;

$(document).ready(function(){
	$("#btn_Noticias").click(function(){cargarNoticias();});
	$("#gifCarga").hide(); //Esconde el gif al cargar el JSON


}); 







function cargarNoticias(){ //Cargar con el botón
	
	if (n_json < 2) {
		$("#gifCarga").fadeIn(250); //Muestra el div mientras carga el JSON
		$.getJSON("https://rawgit.com/jmb463/WebBootstrap/master/JSON/" + "carga" + n_json + ".JSON", function(jsonObject) {
			añadirFila(jsonObject);
			$("#gifCarga").fadeOut(250); //Esconder el div al cargar el JSON
		}); n_json++;
	}
	else{
		$("#boton").text("No more articles available");
	}
};




function añadirFila(json){
	$.each(json, function(i, item) {
		$("#noticias").append(
			'<div class="col-sm-4 col-md-4">'
				+ '<div class="thumbnail">'
					+ '<img src="' + item.imagen + '" class="img-responsive img-circle" "alt="Imagen">'
					+ '<h3 "class="text-center">' + item.titulo + "</h3>"
					+ '<p class="text-muted">' + item.publicacion + "</p>"
					+ '<p class="text-center">' + item.descripcion + "</p>"
			)
	});
};