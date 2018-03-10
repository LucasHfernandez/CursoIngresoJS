function Mostrar()
{
	var contador = 0;
	var respuesta = "continuar";
	var temperatura;
	var nombre;
	var superficie;

	while(respuesta != "no")
	{
		temperatura = prompt("ingrese temperatura.");
		temperatura = parseInt(temperatura);

		while(temperatura < -100 || temperatura > 100 || isNaN(temperatura))
		{
			temperatura = prompt("Error, ingrese temperatura.");
			temperatura = parseInt(temperatura);
		}
		/*
		nombre = prompt("Ingrese un nombre.");

		while(isNaN(nombre))
		{
			nombre = prompt("Error, Ingrese un nombre.");
		}

		superficie = prompt("Ingrese la superficie.");
		superficie = parseInt(superficie);

		while(superficie < 0 || isNaN(superficie))
		{
			superficie = prompt("Error, Ingrese superficie");
			superficie = parseInt(superficie);
		}
		*/


		if(temperatura % 2 == 0)


		respuesta = prompt("Ingrese no para salir.");
	}
}

