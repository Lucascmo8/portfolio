import { PodeOuNaoEnviar } from "./validacoes.js"

import { marcados } from "./validacoes.js"
import { inputQuantidade } from "./funcaoQuantidade.js"

let resposta = document.getElementById("resposta")

function mensagem(){
    if (marcados.length > 0 && inputQuantidade.value >0) {
        alert(`Você quer ${inputQuantidade.value} Stickers de ${marcados.join(", ")}`)
        resposta.innerHTML = `Formulário enviado com sucesso!`
    }else if(marcados.length == 0){
        alert(`Você precisa marcar qual sticker você quer...`)
    }else{
        alert(`Favor colocar uma quantidade válida`)
    }

}


export{mensagem}