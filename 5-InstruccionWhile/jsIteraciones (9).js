function Mostrar()
{
	var contador=0;
	// declarar variables
	var maxima;
	var minima;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Error, por favor ingrese un numero.");
			numero = parseInt(numero);
		}

		if(contador == 0)
		{
			contador = contador + 1;
			maxima = numero;
			minima = numero;
		}
		else
		{
			if(maxima < numero)
			{
				maxima = numero;
			}
			else
			{
				if(minima > numero)
				{
					minima = numero;
				}
			}
		}
		contador = contador + 1;
		respuesta = prompt("Desea ingresar otro numero? presione: Si.");
	}

	document.getElementById('maximo').value = maxima;
	document.getElementById('minimo').value = minima;
}//FIN DE LA FUNCIÓN