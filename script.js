
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
const ganadorMaquina=(resultado)=>{
    if(resultado===5){
        acumuladorResultados[0]=0;
        acumuladorResultados[1]=0;
        contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
    }
}
const ganadorUsuario=(resultado)=>{
    if(resultado===5){
        acumuladorResultados[0]=0;
        acumuladorResultados[1]=0;
        contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
    }
}
const contenedor=document.querySelector('.contenedor');
const h1=document.querySelector('.contenedor h1');
const contador=document.getElementById('contador');
const eleccionUsuario= document.getElementsByClassName('button-game');
const restart= document.getElementById('restart');
//contador de resultados
let acumuladorResultados=[0,0];
//eventos del DOM 
//reinicio
restart.addEventListener('click',restaurar);
eleccionUsuario[0].addEventListener('click',()=>{
    const eleccionMaquina=random();
    if(eleccionMaquina===1){
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText=`IT'S A DRAW 😱​`
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText=`IT'S A DRAW 😱​`;
            contenedor.insertBefore(nuevoDiv,contador);
        }
    }else if(eleccionMaquina===2){
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE PAPER!☹️​';
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[1]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorMaquina(acumuladorResultados[1]);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE PAPER!☹️​';
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[1]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorMaquina(acumuladorResultados[1]);
        }
    }else{
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='YEAH, YOU WIN 💪​';
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[0]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorUsuario(acumuladorResultados[0]);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='YEAH, YOU WIN 💪​';
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[0]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorUsuario(acumuladorResultados[0]);
        }
    }
});
eleccionUsuario[1].addEventListener('click',()=>{
    const eleccionMaquina=random();
    if(eleccionMaquina===2){
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText=`IT'S A DRAW 😱​`
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText=`IT'S A DRAW 😱​`;
            contenedor.insertBefore(nuevoDiv,contador);
        }
    }else if(eleccionMaquina===3){
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE SCISSORS!☹️​';
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[1]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorMaquina(acumuladorResultados[1]);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE SCISSORS!☹️​';
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[1]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorMaquina(acumuladorResultados[1]);
        }
    }else{
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='YEAH, YOU WIN 💪​';
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[0]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorUsuario(acumuladorResultados[0]);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='YEAH, YOU WIN 💪​';
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[0]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorUsuario(acumuladorResultados[0]);
        }
    }
});
eleccionUsuario[2].addEventListener('click',()=>{
    const eleccionMaquina=random();
    if(eleccionMaquina===3){
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText=`IT'S A DRAW 😱​`
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText=`IT'S A DRAW 😱​`;
            contenedor.insertBefore(nuevoDiv,contador);
        }
    }else if(eleccionMaquina===1){
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE ROCK!☹️​';
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[1]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorMaquina(acumuladorResultados[1]);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='OH NOO, YOU LOSE YOUR OPONENT CHOOSE ROCK!☹️​';
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[1]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorMaquina(acumuladorResultados[1]);
        }
    }else{
        const resultadoAnterior=document.querySelector('.resultado');
        if(resultadoAnterior!==null){
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='YEAH, YOU WIN 💪​';
            contenedor.removeChild(resultadoAnterior);
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[0]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorUsuario(acumuladorResultados[0]);
        }else{
            const nuevoDiv=document.createElement('div');
            nuevoDiv.classList.add('resultado');
            nuevoDiv.innerText='YEAH, YOU WIN 💪​';
            contenedor.insertBefore(nuevoDiv,contador);
            acumuladorResultados[0]+=1;
            contador.innerText=`${acumuladorResultados[0]}:${acumuladorResultados[1]}`
            ganadorUsuario(acumuladorResultados[0]);
        }
    }
});

