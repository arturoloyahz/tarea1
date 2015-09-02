//Input Example

INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the fist example in order
//and uncomment the next line in order test this case)

//INPUT = "7\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
arreglo = INPUT.split("\n");
num_tests = arreglo[0];
if(num_tests >= 1 && num_tests <= 100 )
{
	i = 1;
	for (i; i <= num_tests; i++)
	{
		datos = arreglo[i].split(" ");
		cuadrados_perfectos(datos[0],datos[1]);
	}
}

function cuadrados_perfectos(empieza,acaba) 
{ if (empieza >= 1 && empieza <= acaba && acaba <= Math.pow(10,9))
	{
		cont = 0;
		indice = Math.floor(Math.sqrt(empieza));
		valor = indice;
		cuadrado = valor*valor;
		while(cuadrado <= acaba)
		{		 
			cuadrado = valor*valor;
			if(cuadrado >= empieza && cuadrado <= acaba)
			{	
				cont++;
			}
			indice++;
			valor = indice;
		}		
		console.log(cont);
	}
}

