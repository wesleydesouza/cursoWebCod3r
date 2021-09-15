// pessoa -> 123 -> {...}
const pessoa = { nome: "João"};
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...}
//pessoa = { nome: "Ana"};

Object.freeze(pessoa); //Object.freeze() deixa o objeto 100% constante, ou seja, não pode alterar nada

pessoa.nome ="Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Arthur"});
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);