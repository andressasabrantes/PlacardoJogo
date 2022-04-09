//pegar o que o usuario digitou e guardar numa variável
const nomeTimeA = prompt("Digite o nome do time A:");
const nomeTimeB = prompt("Digite o nome do time B:");

//variáveis com dados
let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;

//variáveis com elementos HTML
const nomeTimeA_HTML = document.getElementById("nomeTimeA");
const nomeTimeB_HTML = document.getElementById("nomeTimeB");
const pontuacaoA_HTML = document.getElementById("pontuacaoA");
const pontuacaoB_HTML = document.getElementById("pontuacaoB");
const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");


//pegando da variável e colocando na tela os nomes dos times
nomeTimeA_HTML.innerText = nomeTimeA; //mostra na tela o nome digitado
nomeTimeB_HTML.innerText = nomeTimeB; //mostra na tela o nome digitado

function adicionarpontuacaoemA() {
    pontoA++;
    pontuacaoA_HTML.innerText = pontoA;

    console.log("pontoA: " + pontoA);
    if (pontoA >= 15 && pontoA - pontoB >= 2) {
        setA++;
        setA_HTML.innerText = setA;
        pontoA = 0;
        pontoB = 0;
        pontuacaoA_HTML.innerText = pontoA;
        pontuacaoB_HTML.innerText = pontoB;
    }
}

function adicionarpontuacaoemB() {
    pontoB++;
    pontuacaoB_HTML.innerText = pontoB;

    if (pontoB >= 15 && pontoB - pontoA >= 2) {
        setB++;
        setB_HTML.innerText = setB;
        pontoA = 0;
        pontoB = 0;
        pontuacaoB_HTML.innerText = pontoB;
        pontuacaoA_HTML.innerText = pontoA;
    }
}


pontuacaoA_HTML.addEventListener("click", adicionarpontuacaoemA);

pontuacaoB_HTML.addEventListener("click", adicionarpontuacaoemB);


