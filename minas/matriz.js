// var menu = ["Productos","Ventas", "Contacto"];
// document.write(menu[0]);

//var dofa = [ ["Fuerza", "Oportunidad"] , ["Debilidades", "Amenazas"] ];
//document.write(dofa);

function explosion()
{
	alert("BOOM!!");
	document.write("<h1>BOOM! Elegiste un area minada. Has muerto :(</h1>");
}
function ganaste()
{
	document.write("Felicidades, eres un ganador :)");
}

// 1 = Muerte. 0 = Salvación.
var campo = [ [ 1 , 0 , 0],
			  [ 0 , 1 , 0],
			  [ 1 , 1 , 1] ];

var textos = ["Vida", "¡BOMBA!"]
var x, y;

alert("¡Peligro! Estás en un campo minado. Elige una posición entre el 0 y el 2 para X y para Y");

x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

if (x <= 2 && y <=2)
{
	var posición = campo[x][y];
	document.write("Elegiste " + textos[posición]);
	if (posición == 1)
		{
			explosion();
		}
		else
		{
			ganaste();
		}
}
else
{	
	document.write("Explotaste! Te saliste del campo.");
	explosion();
}


