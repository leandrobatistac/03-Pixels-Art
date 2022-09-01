// ===================================================================================
// Variáveis globais

const paleta = document.querySelectorAll('#cor1, #cor2, #cor3, #cor4');
const botao = document.getElementById('button-random-color');
const botao2 = document.getElementById('clear-board');
const elementosPaleta = document.querySelectorAll('#cor1, #cor2, #cor3, #cor4');
const pixelBoard = document.querySelector('#pixel-board');
const numLinhas = 5;
const numColunas = 5;

// ===================================================================================
// Paleta de Cores Padrão

const cor1 = document.querySelector('#cor1');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = '#3B60E4';
cor3.style.backgroundColor = '#7765E3';
cor4.style.backgroundColor = '#C8ADC0';

// ===================================================================================
// Função para gerar cores aleatórias
function gerarCores () {
    const caracteres = '0123456789ABCDEF'
    let color = '#';

    for(let index=0; index<6; index+=1){
        color+= caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return color;
}

// ===================================================================================
// Função para criar a paleta de cores
function criarPaleta () {

    botao.addEventListener('click', function(){
        for(let index = 0; index<=paleta.length-1; index+=1){
            if(index === 0){
                paleta[index].style.backgroundColor = 'black';
            } else {
                paleta[index].style.backgroundColor = gerarCores();
            }
        }
    });
}

criarPaleta();

// ===================================================================================
// Função para selecionar a cor
function selecionarCor(clicado){
    const corSelecionada = document.querySelector('.selected')
    corSelecionada.classList.remove('selected');
    clicado.target.classList.add('selected');
}

    for(let key of elementosPaleta){
        key.addEventListener('click', selecionarCor);
    }

// ===================================================================================
// Função para criar o Board de Pixels
function criarBoard(){
    for(let index2=0; index2<numLinhas; index2+=1){
        const linhas = document.createElement('div');
        pixelBoard.appendChild(linhas);

        for(let index3=0; index3<numColunas; index3+=1){
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            linhas.appendChild(pixel);
            pixel.addEventListener('click', function(){
                const corAtual = document.querySelector('.selected').style.backgroundColor;
                this.style.backgroundColor = corAtual;
                console.log(corAtual);
            });
        }
    }
}

criarBoard();

// ===================================================================================
// Função para limpar o Board
function limparBoard (){
    botao2.addEventListener('click', function(){

        const divPixel = document.querySelectorAll('.pixel');

        for(let key of divPixel){
            key.style.backgroundColor = 'white';
        }
    });
}

limparBoard();