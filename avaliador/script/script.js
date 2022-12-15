// pegando os elementos
var rater = window.document.querySelector("#rater")
var finish = window.document.querySelector("#finish")
var main = window.document.querySelector("#main")
var submit = window.document.querySelector("#submit")
var avaliacao = window.document.querySelector("#avaliacao")
let radioBtn = document.querySelectorAll("input[name='num']")

// arrays para guardar o valor
let stars = []

// função para coletar o valor do input
let findSelected = () =>{
    let selected = document.querySelector("input[name='num']:checked")
    stars.pop()
    stars.push(selected.value)
}
radioBtn.forEach(radioBtn =>{
    radioBtn.addEventListener("change",findSelected)
})

submit.addEventListener("click",mostrar)

// função para trocar o conteudo mostrado
function mostrar(){
    if(stars.length >0){
    main.removeChild(rater)
    avaliacao.textContent = `You selected ${stars} out of 5`
    finish.style.display = "flex"}else{
        alert(`Please select an option`)
    }
}