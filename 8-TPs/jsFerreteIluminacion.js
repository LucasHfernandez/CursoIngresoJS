/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio = 35;
 	var precioBruto;
 	var cantidad;
 	var marca;
 	var descuento = 1;
 	var precioFinal;

 	cantidad = document.getElementById('Cantidad').value;
 	marca = document.getElementById('Marca').value;

 	precioBruto = cantidad * precio;

 	switch(cantidad)
 	{
 		case "1":
 		case "2":
 			break;
 		case "3":
 			switch(marca)
 			{
 				case "ArgentinaLuz" :
 					descuento = 0.85;
 					break;

 				case "FelipeLamparas" :
 					descuento = 0.90;
 					break;

 				default :
 				descuento = 0.95;
 			}
 				break;

 		case "4":
 			switch(marca)
 			{
 				case "ArgentinaLuz" :
 
 				case "FelipeLamparas" :
 					descuento = 0.75;
 					break;

 				default :
 				descuento = 0.80;
 			}
 				break;
 
 		case "5":
 			switch(marca)
 			{
 				case "ArgentinaLuz" :
 					descuento = 0.60;
 					break;

 				default :
 				descuento = 0.70;
 			}	
 				break;

 		case "6":
 			descuento = 0.50;
 			break;		
 	}

 	precioFinal = precioBruto * descuento;

 	document.getElementById('precioDescuento').value = precioFinal;


 	/*
 	if(cantidad >= 6)
 	{
 		descuento = (precio * 50) / 100;
 		resultado = precio - descuento;
 	}
 	else if(cantidad == 5 && marca == "ArgentinaLuz")
 	{
 		descuento = (precio * 40) / 100;
 		resultado = precio - descuento;
 	}
 	else if(cantidad == 5 && marca != "ArgentinaLuz")
 	{
 		descuento = (precio * 30) / 100;
 		resultado = precio - descuento;
 	}
 	else if(cantidad == 4 && marca == "ArgentinaLuz")
 	{
 		descuento = (precio * 25) / 100;
 		resultado = precio - descuento;
 	}
 	else if(cantidad == 4 && marca != "ArgentinaLuz")
 	{
 		descuento = (precio * 20) / 100;
 		resultado = precio - descuento;
 	}
 	else if(cantidad == 3 && marca == "ArgentinaLuz")
 	{
 		descuento = (precio * 15) / 100;
 		resultado = precio - descuento;
 	}
 	else if(cantidad == 3 && marca == "FelipeLamparas")
 	{
 		descuento = (precio * 10) / 100;
 		resultado = precio - descuento;
 	}
 	else
 	{
 		descuento = (precio * 5) / 100;
 		resultado = precio - descuento;
 	}

 	document.getElementById('precioDescuento').value = resultado;

 	*/
}
