function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Febrero" :
		{
			alert("Si tiene 28 dias");
			break;
		}
		case "Abril" :
		{}
		case "Junio" :
		{}
		case "Septiembre" :
		{}
		case "Noviembre" :
		{
			alert("Si tiene 30 dias");
			break;
		}
		default:
		{
			alert("Si tiene 31 dias");
		}
	}
}//FIN DE LA FUNCIÓN