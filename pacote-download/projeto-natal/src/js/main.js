//INTELIGÊNCIA DO CRONÔMETRO

let dias = window.document.getElementById('dias-restantes');
dias.innerHTML = "";
let h = new Date ();
let diaAtual = h.getDate();
let mesAtual = h.getMonth();

const natal = new Date ("2024-12-25");
const diaDoNatal = natal.getDate();
const mesDoNatal = natal.getMonth();

let diferencaDeMeses = mesDoNatal - mesAtual;
let diferencaDeMesesTratada = Number(diferencaDeMeses);

let diferencaDeDias = diaDoNatal - diaAtual;
let diferencaDeDiasTratada = Number(diferencaDeDias);

if (diferencaDeMesesTratada >= 1) {
    dias.innerHTML = `Faltam <ins><strong>${diferencaDeMesesTratada}</strong></ins> meses para o Natal!`;
} else if (diferencaDeDiasTratada <= 25) {
    dias.innerHTML = `Faltam <ins><strong>${diferencaDeDiasTratada}</strong></ins> dias para o Natal!`;
} else {
    dias.innerHTML = `<strong>O Natal passou!</strong> Até ano que vem...`;
}

//INTELIGÊNCIA DA LISTA 

let protoNome = document.getElementById("nome");
let protoPresente = document.getElementById("item-da-lista");
const lista = document.getElementById("lista");
const botao = document.getElementById("botao");

function clicou() {
    // window.alert("nome: " + protoNome.value + " presente: " + protoPresente.value);
    let criarItemDeLista = window.document.createElement("li");
    let conteudoDoItemDaLista = document.createTextNode(`${protoPresente.value}`);
    criarItemDeLista.appendChild(conteudoDoItemDaLista);
    lista.appendChild(criarItemDeLista);
}