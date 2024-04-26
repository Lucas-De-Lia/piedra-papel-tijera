//funciones
function random(){
    let numeroRandom= Math.random();
    let nuevoNumero=(Math.floor((numeroRandom*10))%3)+1;
    return nuevoNumero;
}
const restaurar=()=>{
    const nuevoDiv=document.querySelector('.resultado');
    if(nuevoDiv!==null){
        contenedor.removeChild(nuevoDiv);
        acumuladorResultados[0]=0;
        acumuladorResultados[1]=0;
        contador.innerText='0:0'
    }
}

const buscarGanador= (eleccionUsuario)=>{
    if(eleccionUsuario==='piedra'){
        
    }else if(eleccionUsuario==='papel'){

    }else{

    }
}
//objetos del DOM a modificar y/o esperar Evento 
const contenedor=document.querySelector('.contenedor');
const h1=document.querySelector('.contenedor h1');
const contador=document.getElementById('contador');
const eleccionUsuario= document.getElementsByClassName('button-game');
const restart= document.getElementById('restart');
//eventos del DOM 

let acumuladorResultados=[0,0];
//reinicio
restart.addEventListener('click',restaurar);

eleccionUsuario[0].addEventListener('click',buscarGanador('piedra'));
eleccionUsuario[1].addEventListener('click',buscarGanador('papel'));
eleccionUsuario[2].addEventListener('click',buscarGanador('tijera'));






/*  
eleccionUsuario[0].addEventListener('click',()=>{const eleccionMaquina=random();
    if(acumuladorResultados[0]===0 && acumuladorResultados[1]===0){
        if(eleccionMaquina===1){
            //empate
            const div=document.createElement('div');
            div.classList.add('resultado');
            div.innerText=`IT'S A DRAW 😱​`
            contenedor.insertBefore(div,contador);
        } else if(eleccionMaquina===2){
            //perdedor
            const div=document.createElement('div');
            div.classList.add('resultado');
            div.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE PAPER!';
            contenedor.insertBefore(div,contador);;
            acumuladorResultados[1]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
        }else{
            //ganador
            const div=document.createElement('div');
            div.classList.add('resultado');
            div.innerText='YEAH, YOU WIN 💪​';
            contenedor.insertBefore(div,contador);
            acumuladorResultados[0]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
        }
    }else{
        if(eleccionMaquina===1){
            //empate
            const divAnterior=document.getElementsByClassName('resultado');
            divAnterior[0].remove();
            const div=document.createElement('div');
            div.classList.add('resultado');
            div.innerText=`IT'S A DRAW 😱​`
            contenedor.insertBefore(div,contador);
        } else if(eleccionMaquina===2){
            //perdedor
            const divAnterior=document.getElementsByClassName('resultado');
            divAnterior[0].remove();
            const div=document.createElement('div');
            div.classList.add('resultado');
            div.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE PAPER!';
            contenedor.insertBefore(div,contador);;
            acumuladorResultados[1]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
        }else{
            //ganador
            const divAnterior=document.getElementsByClassName('resultado');
            divAnterior[0].remove();
            const div=document.createElement('div');
            div.classList.add('resultado');
            div.innerText='YEAH, YOU WIN 💪​';
            contenedor.insertBefore(div,contador);
            acumuladorResultados[0]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
        }
    }   
});
*/






/* 
eleccionUsuario[0].addEventListener('keydown',);
eleccionUsuario[1].addEventListener('click',);
eleccionUsuario[1].addEventListener('keydown',);
eleccionUsuario[2].addEventListener('click',);
eleccionUsuario[2].addEventListener('keydown',);
*/
