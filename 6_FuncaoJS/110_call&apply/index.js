/*
Quando você quiser parametrizar os argumentos que são passados para uma função, ou seja, não sabe, por exemplo, a quantidade de argumentos que será passado pra ela, basta usar o apply, já que os argumentos serão elementos de um array que não tem tamanho predefinido. Diferentemente de call, no qual você precisa listar explicitamente no código os argumentos.

Por exemplo:

funcao.apply(thisDesejado, arrayDeArgumentos)
funcao.call(thisDesejado, arg1, arg2, ...)
*/

function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco())

//com call
const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
//com apply
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17,"$"))
console.log(getPreco.apply(carro, [0.17,"$"]))