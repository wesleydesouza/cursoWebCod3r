//Boject.preventExtensions nao add novos atributos, podendo excluir
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "promocao"
});

console.log("Extensivel:", Object.isExtensible(produto)); //false

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal nao add atributos, nao exclui atributos, podendo modificar
const pessoa = { nome: "Juliana", idade: 35};
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes, nao faz nada