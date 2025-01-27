//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo(){

    let amigo = document.getElementById('amigo').value.trim();
    
    if (amigo === ""){
        alert('É necessário escrever um nome!!')
    } else {
        listaDeAmigos.push(amigo);
    }

    limparCampo();

    console.log(`Amigo ${amigo} adicionado`);
    console.log(listaDeAmigos)
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
};