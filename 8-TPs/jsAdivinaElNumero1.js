/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	numeroSecreto=Math.floor(Math.random() * 100) + 1;

	contadorIntentos = 1;

	document.getElementById('intentos').value=contadorIntentos;

	console.log(numeroSecreto);

}

function verificar()
{
	var numero;
	var numeroDiferencia;
	var primerMensaje;
	var segundoMensaje;

	numero=document.getElementById('numero').value;


	if(numero == numeroSecreto)
	{
		contadorIntentos = contadorIntentos + 1;
		alert("Usted es un ganador!! y en solo: " + contadorIntentos + " intentos");
		return(contadorIntentos = 0);
	}
	else
	{
		if(numero > numeroSecreto)
		{
			numeroDiferencia = numero - numeroSecreto;
			primerMensaje = "Te Pasaste!";
		}
		else
		{
			if(numero < numeroSecreto)
			{
				numeroDiferencia = numeroSecreto - numero;
				primerMensaje = "Te Faltó!";
			}
		}	

		if(numeroDiferencia <= 10)
		{
			segundoMensaje = "Estas muy cerca!!";
		}
		else
		{
			if(numeroDiferencia >= 11 && numeroDiferencia <= 20)
			{
				segundoMensaje = "No estas tan cerca!";
			}
			else
			{
				segundoMensaje = "Estas lejos!!";
			}
		}
		
		alert(" " + primerMensaje + " " + segundoMensaje);
	}	
		
	contadorIntentos = contadorIntentos + 1;
	document.getElementById('intentos').value=contadorIntentos;

	if(contadorIntentos == 10)
	{
		alert("Perdiste! Vuelve a intentarlo");
		return(contadorIntentos = 0);
	}
}