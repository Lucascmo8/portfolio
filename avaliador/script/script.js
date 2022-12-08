var rater = window.document.querySelector("#rater")
var finish = window.document.querySelector("#finish")
var main = window.document.querySelector("#main")
var submit = window.document.querySelector("#submit")
var avaliacao = window.document.querySelector("#avaliacao")


let stars = []

var s1 = window.document.querySelector("#s1")
s1.addEventListener("click",btn1)
function btn1(){
    stars.pop(); 
    stars.push(1)
    s2.classList.remove("last")
    s3.classList.remove("last")
    s4.classList.remove("last")
    s5.classList.remove("last")
    s1.classList.add("last")
}
var s2 = window.document.querySelector("#s2")
s2.addEventListener("click",btn2)
function btn2(){
    stars.pop(); 
    stars.push(2)
    s1.classList.remove("last")
    s3.classList.remove("last")
    s4.classList.remove("last")
    s5.classList.remove("last")
    s2.classList.add("last")
}
var s3 = window.document.querySelector("#s3")
s3.addEventListener("click",btn3)
function btn3 (){
    stars.pop(); 
    stars.push(3)
    
    s1.classList.remove("last")
    s2.classList.remove("last")
    s4.classList.remove("last")
    s5.classList.remove("last")
    s3.classList.add('last')
}
var s4 = window.document.querySelector("#s4")
s4.addEventListener("click",btn4)
function btn4 (){
    stars.pop(); 
    stars.push(4)
    s1.classList.remove("last")
    s2.classList.remove("last")
    s3.classList.remove("last")
    s5.classList.remove("last")
    s4.classList.add("last")
}
var s5 = window.document.querySelector("#s5")
s5.addEventListener("click",btn5)
function btn5 (){
    stars.pop(); 
    stars.push(5)
    s1.classList.remove("last")
    s2.classList.remove("last")
    s3.classList.remove("last")
    s4.classList.remove("last")
    s5.classList.add("last")
}

submit.addEventListener("click",mostrar)

function mostrar(){
    if(stars.length >0){
    main.removeChild(rater)
    avaliacao.textContent = `You selcted ${stars} out of 5`
    finish.style.display = "flex"}else{
        alert(`Please select an option`)
    }
}