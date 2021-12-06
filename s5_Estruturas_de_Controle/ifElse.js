const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }
    else if(nota >= 5){
        console.log('Recuperação!')
    }
    else{
        console.log('Reprovado!')
    }
}

imprimirResultado(4)
imprimirResultado(6)
imprimirResultado(8)
imprimirResultado('Epa!')  // cuidado com linguagem fracamente tipada!!!


