"use strict";
// procura uma tagname input no dom
const input = document.querySelector("input");
// caso haja "valorDigitado" no localStorage ele é inserido na constante total
const total = localStorage.getItem("valorDigitado");
// caso total e input nao sejam null e insere os dados do total no valor do input e ja calcula automaticamente os ganhos
if (total) {
    input ? (input.value = total) : null;
    calcularGanho(Number(total));
}
// Função responsavel por calcular os ganhos e renderizar na tag 'p' caso ela exista
function calcularGanho(value) {
    // procura a tagname "p" no dom
    const p = document.querySelector("p");
    // Faz o calculo dos ganhos
    const ganho = value + 100 - value * 0.2;
    // Caso exista uma tagname "p" insere os ganhos no texto da tag
    p ? (p.innerText = `ganho total: ${ganho}`) : null;
}
// Sempre que for digitado um novo valor no input essa função é chamada
function totalMudou() {
    //recebe os dados do input
    const value = input ? input.value : null;
    // verifica se o value não é null, salva no localstorage e invoca a funcao de "calcularGanho"
    if (value) {
        //Salva o valor no localstorage
        localStorage.setItem("valorDigitado", value);
        //Converte o valor para number
        const valueConvertido = Number(value);
        //Invoca a funcao passando o valorConvertido
        calcularGanho(valueConvertido);
    }
    // caso o value seja null remove os dados do localStorage
    else {
        localStorage.removeItem("valorDigitado");
    }
}
// ternario responsavel por acompanhar o evento de digitação no input caso ele exista
input ? input.addEventListener("keyup", totalMudou) : null;
