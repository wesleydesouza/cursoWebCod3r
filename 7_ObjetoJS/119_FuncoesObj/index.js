const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13
};

console.log(Object.keys(pessoa)); //pega tds as chaves do obj
console.log(Object.values(pessoa)); //pega os valores do obj
console.log(Object.entries(pessoa)); //pegas as chaves e valores em arrays
//exemplo entries percorrendo arrays

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

console.log(Object.defineProperty(pessoa, "dataNascimento", {//define uma propriedade, por exemplo, aquela propriedade pode ou nao ser alterada, ficara visivel
  enumerable: true,//vai ser listado? Sim
  writable: false,// vai ser alterada? Não
  value: "01/01/2019"
})); 

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento); //"01/01/2019" nao foi alterado
console.log(Object.keys(pessoa)); //foi listada por conta do enumerable: true

// Object.assign (ECMAScript 2015)
 const dest = { a: 1 };
 const o1 = { b: 2 };
 const o2 = { c: 3, a: 4 };
 const obj = Object.assign(dest, o1, o2);//ele concatena(junta) e pega a chave repetida e substitui o valor a primeira da ultima, mantendo a mesma sequencia, ou seja, a: 4, b: 2, c: 3
 console.log(obj);

console.log(Object.freeze(obj));// ele freeza a chave, obj ou valor, mantendo o original
obj.c = 1234;