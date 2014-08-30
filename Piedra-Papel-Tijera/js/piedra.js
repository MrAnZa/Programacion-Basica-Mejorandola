//Genera un número aleatorio entre un rango de enteros
function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = patito(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra %% opcionMaquina == piedra)
{
	alert("Empate!");
}
else if(opcionUsuario == piedra && opcionMaquina == papel)
{
	alert("Perdiste :( ");
}
else if(opcionUsuario == piedra && opcionMaquina == tijera)
{
	alert("Ganaste!");
}
else if(opcionUsuario == papel && opcionMaquina == piedra)
{
    alert("Ganaste!");
}
else if(opcionUsuarioo == papel && opcionMaquina == papel)
{
    alert("Empate!");
}
else if(opcionUsuario == papel && opcionMaquina == tijera)
{
    alert("Perdiste!");
}
else if(opcionUsuario == tijera && opcionMaquina == tijera)
{
	alert("Empate!");
}
else if(opcionUsuario == tijera && opcionMaquina == papel)
{
	alert('Ganaste! :D');
}
else if(opcionUsuario == tijera && opcionMaquina == piedra)
{
	alert('Perdiste! :(');
} 
else
{
alert("¿Pos qué carajo?");
}