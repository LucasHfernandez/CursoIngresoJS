function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;


	numero=Math.floor(Math.random() * 11);


	if(numero >8)
	{
		alert("EXCELENTE: " + numero);
	}
	else
	{
		if(numero >3)
		{
			alert("APROBÓ: " + numero);
		}
		else
		{
			alert("Vamos, la proxima se puede: " + numero);
		}
	}
}//FIN DE LA FUNCIÓN