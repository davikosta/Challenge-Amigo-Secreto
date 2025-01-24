// Version: 1.0

// Variables
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultList = document.getElementById('resultado');
let amigos = [];

// Functions
function adicionarAmigo() {

    let amigo = inputAmigo.value;
    
    if (amigo === '') {
        alert('Digite o nome do amigo!');
        return;
    }

    amigos.push(amigo);

    listaAmigos.innerHTML = amigos.join(', ');

    clearInput();
    
};

function clearInput() {
    inputAmigo.value = '';
}

function sortearAmigo() {

    if (amigos.length < 2) {
        alert('Adicione mais amigos para sortear!');
        return;
    }
    
    let tamanhoDaLista = retornarTamanhoDaLista();
    let amigoSorteado = Math.floor(Math.random() * tamanhoDaLista);
    let exibirSorteado = amigos[amigoSorteado];

    resultList.innerHTML = exibirSorteado;

}
function retornarTamanhoDaLista() {
    return amigos.length;
}

