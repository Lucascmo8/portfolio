// import { marcados } from "./pegandoValoresDosCheckbox.js";
import { btnEnviar } from "./pegandoValoresDosCheckbox.js";
// import { checkboxes } from "./pegandoValoresDosCheckbox.js";

import { btnMais } from "./funcaoQuantidade.js";
import { btnMenos } from "./funcaoQuantidade.js";
import { inputQuantidade } from "./funcaoQuantidade.js";

import { mensagem } from "./enviandoAMensagem.js";
import { checkboxes } from "./pegandoValoresDosCheckbox.js";
var marcados = []

// função para sinalizar se o botão de dimunir está valido e o input está zerado ou não
let aoCarregar = window.addEventListener("load",validos)

const elementosOnBlur = [btnMais,btnMenos,inputQuantidade]

elementosOnBlur.forEach(elemento => elemento.addEventListener("blur",validos))

function validos(){
    PodeOuNaoEnviar()
    validarBotao()
}

function validarBotao(){
    if(inputQuantidade.value <= 0 ){
        btnMenos.style.background = `url(imagens/menosVazio.svg)`
        inputQuantidade.classList.add("vazio")
    }else{
        btnMenos.style.background = `url(imagens/menos.svg)`
        inputQuantidade.classList.remove("vazio")
    }
}

// função para não deixar o botão de enviar funcionar caso algo esteja incompleto
function PodeOuNaoEnviar (){
    marcados = []

    checkboxes.forEach(checkbox => checkbox.checked ? marcados.push(checkbox.value) : console.log(``))

    if(marcados.length <= 0 || inputQuantidade.value <=0){
        btnEnviar.classList.add("vazio")
    }
    else{
        btnEnviar.classList.remove("vazio")
    }

}

// função de hover no botão menos
btnMenos.addEventListener("mouseenter",hoverMenos)

function hoverMenos(){
    if(inputQuantidade.value >0){
        btnMenos.style.background = `url(imagens/menosHover.svg)`
    }
}

btnMenos.addEventListener("mouseleave",leaveHoverMenos)
function leaveHoverMenos(){
    if(inputQuantidade.value > 0){
        btnMenos.style.background = `url(imagens/menos.svg)`
    }
}


export {marcados}
export {validarBotao}
export {validos}
export {PodeOuNaoEnviar}
export { mensagem}