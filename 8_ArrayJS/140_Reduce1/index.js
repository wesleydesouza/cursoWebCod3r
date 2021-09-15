const alunos = [
    { nome: "Marcos", nota: 7.3, bolsista: false},
    { nome: "Mario", nota: 9.2, bolsista: true},
    { nome: "Sergio", nota: 9.8, bolsista: false},
    { nome: "Junior", nota: 8.7, bolsista: true}
];

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 0);
console.log(resultado);