//template serve para atalhar a concatenação e deixar mais bonito
const nome = "Rebeca";
const concatenacao = "Ola " + nome + "!";
//ou
const nome1 = "Junior";
const template = `
    Ola ${nome1}!`;//ele considera espaço e quebra de linhas
console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = string => string.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);