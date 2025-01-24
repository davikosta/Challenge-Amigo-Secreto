// Version: 1.3

// Variables
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultList = document.getElementById('resultado');
let amigos = [];

// Functions
function adicionarAmigo() {

    let amigo = inputAmigo.value.trim();
    
    if (amigo === '') {
        alert('Digite o nome do amigo!');
        return;
    }

    // Verifica se a entrada contém apenas letras e espaços
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(amigo)) {
        alert('Digite um nome válido (somente letras e espaços)!');
        return;
    }

    // Remove espaços extras entre as letras
    amigo = amigo.replace(/\s+/g, ' ');

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

    // Remove o amigo sorteado da lista
    amigos.splice(amigoSorteado, 1);

    // Atualiza a lista de amigos exibida
    listaAmigos.innerHTML = amigos.join(', ');

    resultList.innerHTML = exibirSorteado;



}
function retornarTamanhoDaLista() {
    return amigos.length;
}

