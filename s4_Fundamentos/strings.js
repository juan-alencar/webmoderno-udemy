const escola = "Cod3r"
console.log(escola.charAt(4))  // pegar um caractere de uma string a partir do seu index
console.log(escola.charAt(3))
console.log(escola.charCodeAt(3))  // pegar o Unicode do caractere a partir do seu index
console.log(escola.indexOf("3"))  // pegar um index de uma string a partir de um caractere

console.log(escola.substring(1))  // criar uma substring a partir de um indice inicial
console.log(escola.substring(0, 3))  // criar uma substring a partir de um indice inicial até um final

console.log('Escola '.concat(escola).concat("!"))  // função de concatenação 
console.log('Escola ' + escola + "!")  

console.log(escola.replace('r', 'e'))  // função de trocar um caractere por outro
console.log(escola.replace(/\w/g, 'e'))  // função de trocar um caractere por outro usando rejex

console.log('Ana, Maria, Pedro'.split(','))  // quebra uma string num array
