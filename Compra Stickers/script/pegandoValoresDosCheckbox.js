import { mensagem } from "./enviandoAMensagem.js"
import { validos } from "./validacoes.js"

let checkboxes = document.querySelectorAll("[data-checkbox]")
let btnEnviar = document.getElementById("btnSubmit")

btnEnviar.addEventListener("click", enviar)

function enviar() {
    // marcados = []
    mensagem()
}

checkboxes.forEach(checkbox => checkbox.addEventListener("blur",validos))

// export{marcados}
export {btnEnviar}
export{ enviar}
export {checkboxes}