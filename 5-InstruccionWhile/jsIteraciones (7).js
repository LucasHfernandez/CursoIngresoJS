function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='si';

	while(respuesta == 'si')
	{
		numero = prompt("ingrese numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Error, por favor ingrese un numero");    //Esto funciona si el usuario coloca un valor que NO sea numerico. Se ejecutara hasta que el usuario coloque un numero.			                                                             
			numero = parseInt(numero);
		}

		acumulador = acumulador + numero;							  //gracias al "while" de arriba, este acumulador me dice que es un numero si o si.
		contador = contador + 1;
		respuesta = prompt("Desea ingresar otro numero? presione: si");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN

//Corregir: Si el usuario pone cancelar, no lo deja salir.
//Para hacer: Si el usuario coloca un solo numero, no hacer nada.