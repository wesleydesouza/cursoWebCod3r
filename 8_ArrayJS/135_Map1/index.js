//.map() transforma um array em outro modificado
const nums = [1, 2, 3, 4, 5];

//map é um for com o proposito, pode receber parametros de valor, indice ou array

//nesse contexto, valor transformar a array nums em outra array multiplicada em 2
let resultado = nums.map(function(e) {
    return e * 2;
});

console.log(resultado, nums);//[ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2)/*para ter duas casas decimnais*/.replace(".",",")/*para substituir o . por , */}`;

console.log(nums.map(soma10).map(triplo).map(paraDinheiro));