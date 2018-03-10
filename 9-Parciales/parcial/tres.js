function Mostrar()
{
	var precio;
	var descuento;
	var iva;
	var precioFinal;

	precio = document.getElementById('alrgo').value;
	descuento = document.getElementById('ancho').value;

	precio = parseInt(precio);
	decuento = parseInt(descuento);

	descuento = (precio * descuento) / 100;

	precio = precio - descuento;

	iva = (precio * 21) / 100;

	precioFinal = precio + iva;

	alert("El precio final es: " + precioFinal);
}


/* si quiero tomar valores, tengo que usar el document.getelementbyid del lado derecho, 
pero si quiero que esos valores se coloquen en la pantalla (sin alert o prompt o document.log)
el document.getelementbyid se coloca del lado izquierdo. */
