// ===================================================================================
// Variáveis globais

const paleta = document.querySelectorAll('.color');
const botao = document.getElementById('button-random-color');
const elementosPaleta = document.querySelectorAll('#cor1, #cor2, #cor3, #cor4');

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