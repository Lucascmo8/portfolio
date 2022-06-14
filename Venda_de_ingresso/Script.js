
var a = window.document.getElementById('cadeira_2')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',saida)

function clicar() {
 a.style.background = 'green'
}

var b = window.document.getElementsByClassName('cadeira_3')
b.addEventListener('click',escolha)

function escolha() {
    b.style.background ='yellow'
}
