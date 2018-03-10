function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var mensaje;

	numeroUno = prompt("Ingrese el primer numero.");
	numeroDos = prompt("Ingrese el segundo numero.");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt (numeroDos);


	if(numeroUno == numeroDos)
	{
		mensaje = numeroUno + "" + numeroDos ;
	}
	else
	{
		if(numeroUno > numeroDos)
		{
			mensaje = numeroUno - numeroDos;
		}
		else
		{
			mensaje = numeroUno * numeroDos;
		}
	}

	alert(mensaje);
}
