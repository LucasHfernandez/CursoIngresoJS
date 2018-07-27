function mostrar()
{

	var contador = 0;
	/*
	var maximo = -9999;
	var minimo = +9999;
	*/
	//var bandera = 0;
	var numero;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);
		if(numero > maximo)
		{
			maximo = numero;
		}
		if(numero < minimo)
		{
			minimo = numero;
		}
		contador = contador + 1;
		respuesta = prompt("Desea ingresar otro numero?");
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}//FIN DE LA FUNCIÓN



/* if(bandera == 0)
	{
	maximo = numero;
	minimo = numero;
	bandera = 1;
	}
	else
	{
		if(numero > maximo)
		{
			maximo = numero;
		}
		if(numero < minimo)
		{
			minimo = numero;
		}
	}
*/