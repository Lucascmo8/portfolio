const calculo = document.getElementById("calculo")

function displaynum(n1){
    calculo.value = calculo.value+n1;

    transformar(calculo.value)
}


const caracteresEspeciais = ["+","-","*","/","."]
const teclasDeResultado = ["Enter","="]

function digitar(event){
        if(event.key >= 0 || event.key <=9){
            displaynum(event.key)
        }
        if(caracteresEspeciais.includes(event.key) == true){
            displaynum(event.key)
        }
        if(teclasDeResultado.includes(event.key) == true){
            calculo.value=eval(calculo.value)
        }
}

function limparCalculo(){
    calculator.calculo.value = ""
}