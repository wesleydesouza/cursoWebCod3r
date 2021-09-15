//novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
};
//destructuring com obj
const {nome, idade} = pessoa;
//tira nome e idade do obj pessoa, e ela fica por conta propria como se fizesse "let Ana" ou "let 5"

console.log(nome, idade);

//destructuring com array

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1,n3,n5,n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);

//destructuring3 com obj
function rand({ min = 0, max = 1000} = {}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({min: 955 })); 
console.log(rand({}));
console.log(rand());

//destruturing4 com array
function rand1([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand1([50,40]));
console.log(rand1([922]));