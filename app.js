//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo(){

    let amigo = document.querySelector('input').value;
    listaDeAmigos.push(amigo);
    limparCampo();

    console.log(listaDeAmigos);
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
};