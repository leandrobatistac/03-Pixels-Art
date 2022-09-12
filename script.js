// ===================================================================================
// Variáveis globais

const paleta = document.querySelectorAll('#cor1, #cor2, #cor3, #cor4');
const botao = document.getElementById('button-random-color');
const botao2 = document.getElementById('clear-board');
const elementosPaleta = document.querySelectorAll('#cor1, #cor2, #cor3, #cor4');
const pixelBoard = document.querySelector('#pixel-board');
let numLinhas = 5;
let numColunas = 5;
const arrayCores = ['black', '#3B60E4', '#7765E3', '#C8ADC0'];
let codigoHex = '';

// ===================================================================================
// Manter o tamanho utilizado por ultimo

let salvo2 = localStorage.getItem('boardSize');
if(salvo2){
    salvo2 = JSON.parse(salvo2);
    numColunas = salvo2;
    numLinhas = salvo2;
} else{
    localStorage.setItem('boardSize', JSON.stringify(numColunas));
}

// ===================================================================================
// Paleta de Cores Padrão

const cor1 = document.querySelector('#cor1');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');

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
                arrayCores[index] = 'black';
            } else {
                codigoHex = gerarCores();
                paleta[index].style.backgroundColor = codigoHex;
                arrayCores[index] = codigoHex;
                atualizaLocalStorage();
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
// Função para criar o Board de Pixels (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)
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
                atualizarCor()
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
            atualizarCor()
        }
    });
}

limparBoard();

// ===================================================================================
// Função para salvar as cores da Paleta no LocalStorage

function atualizaLocalStorage (){
    localStorage.setItem('colorPalette', JSON.stringify(arrayCores));
}

// ===================================================================================
// Função para buscar as cores da Paleta no LocalStorage

let salvo = localStorage.getItem('colorPalette');

if(salvo){
    salvo = JSON.parse(salvo);
    for(let i=0; i<salvo.length; i+=1){
        cor1.style.backgroundColor = salvo[0];
        cor2.style.backgroundColor = salvo[1];
        cor3.style.backgroundColor = salvo[2];
        cor4.style.backgroundColor = salvo[3];
    }
} else {
    cor1.style.backgroundColor = 'black';
    cor2.style.backgroundColor = '#3B60E4';
    cor3.style.backgroundColor = '#7765E3';
    cor4.style.backgroundColor = '#C8ADC0';
}

// ===================================================================================
// Botão do VQV e Input

const btn = document.querySelector('#generate-board');
btn.addEventListener('click', function(e){
    let tamanho = document.querySelector('#board-size').value;
    const removerPixels = document.querySelectorAll('.pixel');

    if(tamanho.length === 0){
        alert('Board inválido!')
        return
    }

    if(tamanho > 50){
        tamanho = 50;
    }

    if(tamanho < 5){
        tamanho = 5;
    }

    for(let i2=0; i2<removerPixels.length; i2+=1){
        removerPixels[i2].remove();
    }
    e.preventDefault();
     numLinhas = tamanho;
     numColunas = tamanho;

     criarBoard();
     localStorage.setItem('boardSize', JSON.stringify(tamanho));
})

// ===================================================================================
// Salvar desenho anterior

const todosPixels = document.querySelectorAll('.pixel');
const backgroundAtualizado = [];

function atualizarCor(){
for(k=0; k<todosPixels.length; k+=1){
    backgroundAtualizado[k] = todosPixels[k].style.backgroundColor;
    localStorage.setItem('pixelBoard', JSON.stringify(backgroundAtualizado));
}
}

let salvo3 = localStorage.getItem('pixelBoard');

if(salvo3){
    salvo3 = JSON.parse(salvo3);
    for(let i4=0; i4<salvo3.length; i4+=1){
        todosPixels[i4].style.backgroundColor = salvo3[i4];
    }
}