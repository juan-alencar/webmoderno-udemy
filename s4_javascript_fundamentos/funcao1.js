/**
 * funcao é um bloco de código
 * nomeado que pode-se chamar novamente
 * durante o escopo do código
 */

// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2, 10, 3, 5, 8, 9)
imprimirSoma(2)
imprimirSoma()

// Funcao com retorno
function soma (a, b = 1){
    return a + b;
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())