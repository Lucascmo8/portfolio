// var Para cada Input e a função do botão reset
var input0 = window.document.getElementsByClassName("input_0")[0]
var input1 = window.document.getElementsByClassName("input_1")[0]
var input2 = window.document.getElementsByClassName("input_2")[0]
var input3 = window.document.getElementsByClassName("input_3")[0]
var input4 = window.document.getElementsByClassName("input_4")[0]
var input5 = window.document.getElementsByClassName("input_5")[0]
var input6 = window.document.getElementsByClassName("input_6")[0]
var input7 = window.document.getElementsByClassName("input_7")[0]
var input8 = window.document.getElementsByClassName("input_8")[0]

// Função do Botão reset
var btn_clean = window.document.getElementById("clean")
btn_clean.addEventListener('click', resetar)

function resetar() {
    input0.value = 0
    input1.value = 0
    input2.value = 0
    input3.value = 0
    input4.value = 0
    input5.value = 0
    input6.value = 0
    input7.value = 0
    input8.value = 0
    th0.style.backgroundColor = "white"
    th1.style.backgroundColor = "white"
    th2.style.backgroundColor = "white"
    th3.style.backgroundColor = "white"
    th4.style.backgroundColor = "white"
    th5.style.backgroundColor = "white"
    input0.focus()
}
var th0 = window.document.getElementById("th0")
var th1 = window.document.getElementById("th1")
var th2 = window.document.getElementById("th2")
var th3 = window.document.getElementById("th3")
var th4 = window.document.getElementById("th4")
var th5 = window.document.getElementById("th5")

input0.addEventListener('input', confirmar0)
input0.addEventListener('input', confirmar3)

input1.addEventListener('input', confirmar1)
input1.addEventListener('input', confirmar3)

input2.addEventListener('input', confirmar2)
input2.addEventListener('input', confirmar3)

input3.addEventListener('input', confirmar0)
input3.addEventListener('input', confirmar4)

input4.addEventListener('input', confirmar1)
input4.addEventListener('input', confirmar4)

input5.addEventListener('input', confirmar2)
input5.addEventListener('input', confirmar4)

input6.addEventListener('input', confirmar0)
input6.addEventListener('input', confirmar5)

input7.addEventListener('input', confirmar1)
input7.addEventListener('input', confirmar5)

input8.addEventListener('input', confirmar2)
input8.addEventListener('input', confirmar5)

// para ajudar na Soma de cada acerto
var th_0 = 0
var th_1 = 0
var th_2 = 0
var th_3 = 0
var th_4 = 0
var th_5 = 0

function confirmar0() {
    var soma = Number(input0.value) + Number(input3.value) + Number(input6.value)
    if (soma == 8) {
        th0.style.backgroundColor = "green"
        th_0 = 1
    } else {
        th0.style.backgroundColor = "red"
        th_0 = 0
    }
    completo()
}

function confirmar1() {
    var soma1 = Number(input1.value) + Number(input4.value) + Number(input7.value)
    if (soma1 == 18) {
        th1.style.backgroundColor = "green"
        th_1 = 1
    } else {
        th1.style.backgroundColor = "red"
        th_1 = 0
    }
    completo()
}

function confirmar2() {
    var soma2 = Number(input2.value) + Number(input5.value) + Number(input8.value)
    if (soma2 == 19) {
        th2.style.backgroundColor = "green"
        th_2 = 1
    } else {
        th2.style.backgroundColor = "red"
        th_2 = 0
    }
    completo()
}

function confirmar3() {
    var soma3 = Number(input0.value) + Number(input1.value) + Number(input2.value)
    if (soma3 == 19) {
        th3.style.backgroundColor = "green"
        th_3 = 1
    } else {
        th3.style.backgroundColor = "red"
        th_3 = 0
    }
    completo()
}

function confirmar4() {
    var soma4 = Number(input3.value) + Number(input4.value) + Number(input5.value)
    if (soma4 == 15) {
        th4.style.backgroundColor = "green"
        th_4 = 1
    } else {
        th4.style.backgroundColor = "red"
        th_4 = 0
    }
    completo()
}

function confirmar5() {
    var soma5 = Number(input6.value) + Number(input7.value) + Number(input8.value)
    if (soma5 == 11) {
        th5.style.backgroundColor = "green"
        th_5 = 1
    } else {
        th5.style.backgroundColor = "red"
        th_5 = 0
    }
    completo()
}



function completo() {
    function completo6 (index){
        let res = 0;
        for (let joga = 0; joga <index.length ; joga +=1){
            res = res + index[joga]
        }
        return res
    }
    var completo_6 = completo6([th_0 , th_1, th_2, th_3, th_4, th_5])
    var somaTotal = Number(input0.value) + Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value) + Number(input5.value) + Number(input6.value) + Number(input7.value) + Number(input8.value)
    if (somaTotal == 45 && completo_6 == 6 && Number(input0.value) >= 0 &&Number(input1.value) >= 0 &&Number(input2.value) >= 0 &&Number(input3.value) >= 0 &&Number(input4.value) >= 0 &&Number(input5.value) >= 0 &&Number(input6.value) >= 0 &&Number(input7.value) >= 0 &&Number(input8.value) >= 0) {
        alert(`Parabens Você Completou o desafio`)
        resetar()
    }
}

//4 5 10
//-1 15 1
//5 -2  8