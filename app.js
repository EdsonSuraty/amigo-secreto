//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo(){

    let amigo = document.getElementById('amigo').value.trim();
    
    if (amigo === ""){
        alert('Por favor, insira um nome válido!');
    } else if (listaDeAmigos.includes(amigo)) {
        alert('Esse nome já foi adicionado!');
    } else {
        listaDeAmigos.push(amigo);
        atualizarLista();
        console.log(`Amigo ${amigo} adicionado`);
        console.log(listaDeAmigos)
    }
    limparCampo();
}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
};

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let amigo of listaDeAmigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }

    // Gera um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtem o nome sorteado
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    // Exibe o resultado no HTML
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}