function random(){
    let numeroRandom= Math.random();
    let nuevoNumero=(Math.floor((numeroRandom*10))%3)+1;
    return nuevoNumero;
}
//el usuario eligio piedra
function piedra(){
    const eleccionMaquina=random();
    if(eleccionMaquina===1){
        //si es 1 lo tomo como que eligio Piedra
        alert('Empate!,la maquina eligio piedra');
    }else if(eleccionMaquina ===2){
        //caso Papel
        alert('Perdiste!,la maquina eligio Papel')
    }else{
        //caso tijera
        alert('Ganaste!,la maquina eligio Tijera')
    }
}
//el usuario eligio papel
function papel(){
    const eleccionMaquina=random();
    if(eleccionMaquina===1){
        alert('Ganaste!,la maquina eligio Piedra')
    }else if(eleccionMaquina===2){
        alert('Empate!,la maquina eligio papel');
    }else{
        alert('Perdiste!,la maquina eligio Tijera');
    }
}
//el usuario eligio tijera
function tijera(){
    const eleccionMaquina=random();
    if(eleccionMaquina===1){
        alert('Perdiste!,la maquina eligio Piedra');
    }else if(eleccionMaquina===2){
        alert('Ganaste!,la maquina eligio Papel');
    }else{
        alert('Empate!,la maquina eligio Tijera')
    }
}