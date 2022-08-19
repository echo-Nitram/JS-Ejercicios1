

alert ("Hola!\nBienvenidos al juego Chō-Han Bakuchi");

let cantJugadores = parseInt(prompt("Porfavor ingrese la cantidad de jugadores:"));

let jugar = 1;

while(jugar === 1){
    let dado1  = Math.round(Math.random()*6);
    let dado2 = Math.round(Math.random()*6);
    let resultado = (dado1 + dado2) % 2;

    let ganadores = `Dado 1 = ${dado1}\nDado 2 = ${dado2}\nGanadores:`

    alert ("Los dados ya fueron tirados, la suma de estos sera PAR o IMPAR? \n Dado 1= X \n Dado 2= X");

    for(let i=1; i <= cantJugadores ; i++){
        let apuesta = parseInt(prompt(`Jugador ${i} ingrese su apueste:\n0-PAR\n1-IMPAR`));

        if(resultado === apuesta){
            ganadores = ganadores + `\nJugador ${i}`
        }
    }

    alert (ganadores);
    jugar = prompt("Quieren seguir jugando? \n 1-SI\n *-NO");

}

alert ("FIN");