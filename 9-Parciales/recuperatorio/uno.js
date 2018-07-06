
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese la base del triangulo equilatero.");
	altura = prompt ("Ingrese la altura del triangulo equilatero");

	base = parseInt(base);
	altura = parseInt(altura);

	perimetro = base * 3;

	superficie = base * altura;

	alert("La superficie es: " + superficie + " y el perimetro es: " + perimetro); 
}
