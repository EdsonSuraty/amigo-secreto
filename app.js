//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo(){

    let amigo = document.getElementById('amigo').value.trim();
    
    if (amigo === ""){
        alert('É necessário escrever um nome!!')
        console.log('Entrada inválida. Nenhum amigo adicionado');
    } else if (listaDeAmigos.includes(amigo)) {
        alert('Esse nome já foi adicionado!');
        console.log('Entrada repetida. Nenhum amigo adicionado')
    } else {
        listaDeAmigos.push(amigo);
        console.log(`Amigo ${amigo} adicionado`);
        console.log(listaDeAmigos)
    }
    limparCampo();
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
};