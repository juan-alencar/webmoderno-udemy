function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const televisao50 = trab1 && trab2
    const televisao32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, televisao50, televisao32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

