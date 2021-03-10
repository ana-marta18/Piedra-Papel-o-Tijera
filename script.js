var J1
var movJ1
var J2
var movJ2
var ganador

function ppt (primero,segundo){
    return Math.random()*(segundo-primero)+primero;
}
//movimiento de la maquina
J1 = Math.floor(ppt (1,4));
if(J1 == 1){
    movJ1 = "piedra";
}
if(J1 == 2){
    movJ1 = "papel";
}
if(J1 == 3){
    movJ1 = "tijera";
}
//movimiento del usuario
J2=parseInt(prompt("Seleccione una de las siguientes opciones: \n 1. Piedra \n 2. Papel \n 3. Tijera "));

if(J2 == 1){
    movJ2 = "piedra";
}
if(J2 == 2){
    movJ2 = "papel";
}
if(J2 == 3){
    movJ2 = "tijera";
}
//Función de salida para el movimiento de cada jugador
console.log("El movimiento de la maquina es: " + movJ1);
console.log("El movimiento del usuario es: " + movJ2);
//Si la maquina saca piedra 
if(movJ1=="Piedra" && movJ2=="Piedra"){
    ganador="Oh no, Esto es un empate";
}
if(movJ1=="Piedra" && movJ2=="Tijera"){
    ganador="La piedra de gana a la tijera, punto para la maquina";
}
if(movJ1=="Piedra" && movJ =="papel"){
    ganador="Papel le gana a piedra, punto para el usuario";
}
//Si la maquina saca papel
if(movJ1=="Papel" && movJ2=="Piedra"){
    ganador="Papel le gana a piedra, punto para la maquina";
}
if(movJ1=="Papel" && movJ2=="Tijera"){
    ganador="La tijera le gana al papel, punto para el usuario";
}
if(movJ1=="Papel" && movJ2=="Papel"){
    ganador="Oh no, Esto es un empate";
}
//Si la maquina saca tijera
if(movJ1=="Tijera" && movJ2=="Piedra"){
    ganador="Piedra le gana a tijera, punto para el usuario";
}
if(movJ1=="Tijera" && movJ2=="Tijera"){
    ganador="Oh no, Esto es un empate";
}
if(movJ1=="Tijera" && movJ2=="Papel"){
    ganador="Tijera le gana a papel, punto para la maquina";
}
//Resultado final
console.log("El resultado de esta ronda es: " + ganador);