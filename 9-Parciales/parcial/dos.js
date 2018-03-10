function Mostrar()
{
  	var largo;
	var ancho;
	var perimetro;
	var alambrado;

	largo = document.getElementById('alrgo').value;
	ancho = document.getElementById('ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = (largo + ancho) * 2;

	alambrado = perimetro * 3;

	alert("Se necesitan: " + alambrado + " metros de alambre.");
}
