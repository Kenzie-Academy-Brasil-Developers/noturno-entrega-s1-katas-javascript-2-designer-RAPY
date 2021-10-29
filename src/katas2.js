// comece a criar a sua função add na linha abaixo
function add(num1,num2){
    return num1 + num2
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(num1,num2){
    let resultado=0
    for(let contador=1;  contador <= num2 ; contador++){
        resultado=add(num1,resultado);
    }
    return resultado
}
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(num1,num2){
    let resultadoPower=1
    for(let contador=1;  contador <= num2 ; contador++){
        resultadoPower=multiply(num1,resultadoPower);
    }
    return resultadoPower
}
//descomente a linha seguinte para testar sua função
//console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(argumento){
    let resultadoFator=1
        for(let contador=argumento; contador > 1 ; contador--){
            resultadoFator=multiply(contador,resultadoFator);
        }
        return resultadoFator
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
