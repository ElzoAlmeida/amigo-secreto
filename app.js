//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaSorteio = [];
let addAmigo = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let listaResultado = document.getElementById('resultado');


function adicionarAmigo() {
    let getAmigo = addAmigo.value;
    if (getAmigo == '') {
        alert('Informe o nome do Amigo')
    } else {
        listaSorteio.push(getAmigo);
    }

    atualizaLista();
}

function atualizaLista() {
    lista.innerText = '';
    listaSorteio.forEach((amigo) => {
        let addLista = document.createElement('li');
        addLista.innerText = amigo;
        lista.appendChild(addLista);
    });
    limpaCampo();
}

function sortearAmigo() {
    if (listaSorteio == '') {
        alert('Adicione amigos para sortear');        ;
    } else {
        let sorteio = Math.floor(Math.random() * listaSorteio.length);
        let amigoSorteado = document.createElement('li');
        amigoSorteado.innerText = listaSorteio[sorteio];
        listaResultado.appendChild(amigoSorteado);
    }
}

function limpaCampo() {
    addAmigo.value = '';
}
