function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;


	nota=Math.floor(Math.random() * 11);


	if(nota >8)
	{
		alert("EXCELENTE: " + nota);
	}
	else
	{
		if(nota >3)
		{
			alert("APROBÓ: " + nota);
		}
		else
		{
			alert("Vamos, la proxima se puede: " + nota);
		}
	}
}//FIN DE LA FUNCIÓN