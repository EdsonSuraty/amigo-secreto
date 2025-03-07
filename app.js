//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo(){

    let amigo = document.getElementById('amigo').value.trim();
    
    if (amigo === ""){
        alert('Por favor, insira um nome válido!');
        console.log('Entrada inválida. Nenhum amigo adicionado');
    } else if (listaDeAmigos.includes(amigo)) {
        alert('Esse nome já foi adicionado!');
        console.log('Entrada repetida. Nenhum amigo adicionado')
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