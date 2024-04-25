//funciones
function random(){
    let numeroRandom= Math.random();
    let nuevoNumero=(Math.floor((numeroRandom*10))%3)+1;
    return nuevoNumero;
}
//objetos del DOM a modificar y/o esperar Evento 
const contenedor=document.querySelector('.contenedor');
const h1=document.querySelector('.contenedor h1');
const contador=document.getElementById('contador');
const eleccionUsuario= document.getElementsByClassName('button-game');
const restart= document.getElementById('restart');
//eventos del DOM 
let acumuladorResultados=[0,0];

eleccionUsuario[0].addEventListener('click',()=>{const eleccionMaquina=random();
    if(eleccionMaquina===1){
        //empate
        const div=document.createElement('div');
        div.classList.add('resultado');
        div.innerText=`IT'S A DRAW 😱​`
        contenedor.insertBefore(h1,div);
    } else if(eleccionMaquina===2){
        const div=document.createElement('div');
        div.classList.add('resultado');
        div.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE PAPER!';
        contenedor.insertBefore(h1,div);
        acumuladorResultados[1]+=1;
        
        contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`;
    }
});
eleccionUsuario[0].addEventListener('keydown',);
eleccionUsuario[1].addEventListener('click',);
eleccionUsuario[1].addEventListener('keydown',);
eleccionUsuario[2].addEventListener('click',);
eleccionUsuario[2].addEventListener('keydown',);




/*  

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
*/