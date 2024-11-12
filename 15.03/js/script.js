function digitos(num){
    if(num == "C"){
        calculadora.caixa.value = "";
    }
    else{
        calculadora.caixa.value += num;
    }
}

function calculos(){
    calculadora.caixa.value = eval(calculadora.caixa.value);
}

function apagar(){
    valor = calculadora.caixa.value;
    back = calculadora.caixa.value.length-1;
    calculadora.caixa.value = valor.substring(0,back);
}