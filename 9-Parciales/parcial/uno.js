
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;
	var promedio;
	var resta;

	numeroUno = prompt("Ingrese el primer numero.");
	numeroDos = prompt("Ingrese el segundo numero.");
	numeroTres = prompt("Ingrese el tercer numero.");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);

	suma = numeroUno + numeroDos + numeroTres;

	promedio = numeroUno / numeroDos / numeroTres;//mal

	resta = numeroUno - numeroDos - numeroTres;

	alert("La suma es: " + suma + " el promedio es: " + promedio + " y la resta es: " + resta);
}
	// Se ingresa 3 numeros, informar en una sola consola, la suma, el promedio, y la resta de los numeros tal cual como fueron ingresados  