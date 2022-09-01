function gerarCores () {
    const caracteres = '0123456789ABCDEF'
    let color = '#';

    for(let index=0; index<6; index+=1){
        color+= caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    
    return color;
}

const cor1 = document.querySelector('#cor1');
cor1.style.backgroundColor = 'black';

window.onload = function () {

    const botao = document.getElementById('button-random-color');

    botao.addEventListener('click', function(){

        const cor2 = document.querySelector('#cor2');
        const cor3 = document.querySelector('#cor3');
        const cor4 = document.querySelector('#cor4'); 

        cor2.style.backgroundColor = gerarCores();
        cor3.style.backgroundColor = gerarCores();
        cor4.style.backgroundColor = gerarCores();
    });
}