function Mostrar()
{
	var horas;
	var respuesta = "";

	horas = prompt("Ingrese una hora de 00hs a 24hs");

	switch(horas)
	{
		case "20" :
		{}
		case "21" :
		{}
		case "22" :
		{}
		case "23" :
		{}
		case "00" :
		{}
		case "1" :
		{}
		case "2" :
		{}
		case "3" :
		{}
		case "4" :
		{}
		case "5" :
		{}
		case "6" : 
		{
			respuesta = "Es de noche";
			horas = parseInt(horas);    //Ya que en este caso estamos usando numeros, se necesita parsear.
			if(horas < 7)
			{
				respuesta = respuesta + " Me voy a un bar";
			}
			break;
		}
		case "7" :
		{}
		case "8" :
		{}
		case "9" :
		{}
		case "10" :
		{}
		case "11" :
		{
			respuesta = "Es de mañana.";
			horas = parseInt(horas);
			if(horas >=7 && horas <11)
			{
				respuesta = respuesta + " A desayunar";
			}
			break;
		}
		case "12" :
		{}
		case "13" :
		{}
		case "14" :
		{}
		case "15" :
		{}
		case "16" :
		{}
		case "17" :
		{}
		case "18" :
		{}
		case "19" :
		{
			respuesta = "Tarde de mates."
			break;
		}
		default:
		{
			alert("Error, no existe dentro de los parametros.");
		}
	}

	alert(respuesta);
}


/* Vamos a hacer horas. Las horas son de 0 a 24. de las 12 a las 20 mostrar "Tarde de mate". 
De las 20 a las 6 "es de noche". De las 6 a < 12 "Mañana". Si es de noche y son pasadas las 24 tengo que mostrar
"Me voy a un bar". Si es de mañana con una hora menor a 11, debemos sumar el mensaje "a desayunar." */
