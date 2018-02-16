function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;


	if(edad >17)
	{
		alert("Es Mayor de edad");
	}
	else
	{
		if(edad >12)
		{
			alert("es adolescente");
		}
		else
		{
			alert("Es menor de edad");
		}
	}
}//FIN DE LA FUNCIÓN