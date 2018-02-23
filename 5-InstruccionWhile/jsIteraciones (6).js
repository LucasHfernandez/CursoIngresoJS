function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;
	var iteraciones = 5; //Sirve para saber porcentajes.
	var promedio;
	
	while(contador < iteraciones)
	{
		contador = contador + 1;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}

	promedio = acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN