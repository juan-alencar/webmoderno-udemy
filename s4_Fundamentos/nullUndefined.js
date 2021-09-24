let valor 
console.log(valor)

let valor2 = null
console.log(typeof valor2)
// console.log(valor2.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = 0  //evite atribuir undefined
console.log(!!produto.preco)

// delete produto.preco 
console.log(produto)

produto.preco = null  //sem preco
console.log(!!produto.preco)
console.log(produto)