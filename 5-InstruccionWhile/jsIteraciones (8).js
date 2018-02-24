function Mostrar()
{
	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta == "si")
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Error, por favor ingrese un numero.");
			numero = parseInt(numero);
		}

		if(numero > 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
		}

		contador = contador + 1;
		respuesta = prompt("Desea ingresar otro numero? presiones: si");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN

/*Corregir: 
1- Si el usuario pone cancelar, no lo deja salir.
2- Cuando se hace la suma o la multiplicacion, uno de los cuadrados queda con el numero del contador.
Para hacer: Si el usuario coloca un solo numero, no hacer nada. */

