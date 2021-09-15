/*
JSON é um padrão para troca de dados. Imagina que você tenha sistemas diferentes interagindo, ou seu sistema tenha que interagir com uma API cuja linguagem é diferente. Nesses casos, um objeto poderá ser diferente do outro no que diz respeito a tipos, por exemplo e forma de construção, o que geraria incompatibilidades. Nesse cenário, o JSON aparece como uma forma intermediária, que permite a interação, já que é um formato conhecido. Daí a sua utilizadade, pois é completamente independente da linguagem e, ao mesmo tempo, usa convenções comuns a objetos, o que o torma fácil de usar.
*/
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj));

console.log(JSON.parse('{"a": 1, "b": 2.2, "c": true, "d": {}, "e": [], "f": "String"}'));//criando um JSON, nao suporta funçoes