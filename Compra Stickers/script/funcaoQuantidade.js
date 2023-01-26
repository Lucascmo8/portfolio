import { validarBotao } from "./validacoes.js"

let btnMenos = document.getElementById("menos")
let btnMais = document.getElementById("mais")
let inputQuantidade = document.getElementById("quantidade")

btnMais.addEventListener("click", adicionar)
btnMenos.addEventListener("click", subtrair)

function adicionar() {
    inputQuantidade.value++
    validarBotao()
}


function subtrair() {
    if (inputQuantidade.value > 0) {
        inputQuantidade.value--
    }
    validarBotao()
}

// Função para não deixar o valor abaixo de zero
inputQuantidade.addEventListener("blur", maiorQueZero)

function maiorQueZero() {
    if (inputQuantidade.value < 0) {
        inputQuantidade.value = 0
    }
}


export {adicionar}
export {subtrair}
export {inputQuantidade}
export {btnMais}
export {btnMenos}