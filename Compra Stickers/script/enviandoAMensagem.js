import { PodeOuNaoEnviar } from "./validacoes.js"
import { validarBotao } from "./validacoes.js"
import { marcados } from "./validacoes.js"
import { inputQuantidade } from "./funcaoQuantidade.js"

let resposta = document.getElementById("resposta")

function mensagem(){
    if (marcados.length > 0 && inputQuantidade.value >0) {
        alert(`Seu pedido de ${inputQuantidade.value} Stickers de ${marcados.join(", ")} foi enviado com sucesso!`)
        resposta.style.color = `#00C57C`
        resposta.innerHTML = `Formulário enviado com sucesso!`
        limpar()
    }else if(marcados.length == 0){
        // alert(`Você precisa marcar qual sticker você quer...`)
        resposta.style.color = `#f33232`
        resposta.innerHTML = `Você precisa marcar qual sticker você quer...`
    }else{
        // alert(`Favor colocar uma quantidade válida`)
        resposta.style.color = `#f33232`
        resposta.innerHTML = `Favor colocar uma quantidade válida`
    }

}

function limpar(){
    inputQuantidade.value = Number(0)
    validarBotao()
    PodeOuNaoEnviar()
}
console.log(URL)
export{mensagem}