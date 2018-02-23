function Mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero >9)
	{
		numero = prompt("numero incorrecto. intente de nuevo.");
	}

	document.getElementById('Numero').value = numero;

}//FIN DE LA FUNCIÓN