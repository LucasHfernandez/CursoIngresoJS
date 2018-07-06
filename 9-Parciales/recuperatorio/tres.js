function mostrar()
{
	var precio;
	var descuento;
	var iva;
	var precioFinal;

	precio = prompt("Ingrese el precio.");
	descuento = prompt ("Ingrese el descuento.");

	iva = (precio * 21) / 100;

	descuento = precio * descuento / 100;

	precioFinal = (precio - descuento) + iva;

	precio = precio - descuento;

	alert("El descuento es: " + descuento + " el precio total es: " + precio + " y el iva es: " + iva);

	document.getElementById('elPrecioFinal').value = precioFinal;
}
