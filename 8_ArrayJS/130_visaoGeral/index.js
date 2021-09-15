console.log(typeof Array, typeof new Array, typeof []);//function Obj Obj

//criando array instanciando (nao recomendado)
let aprovados = new Array("Bia", "Carlos", "Ana");
//criando literalmente
aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);//bia
console.log(aprovados[1]);//carlos
console.log(aprovados[2]);//ana
console.log(aprovados[3]);//undefined
//uma forma de add um elemento na array(nao mt usado, serve mais para substituir um elemento ja existente)
aprovados[3] = "Paulo";
aprovados.push("Abia");//.push serve para add um elemento na array, sempre add em ultimo lugar(mais apropriado)
console.log(aprovados.length);//conta quantos elementos consta na array, return 5

aprovados[9] = "Rafael";//do indice 6 ate 8 = return undefined
console.log(aprovados.length);//10
console.log(aprovados[8] === undefined);//true

console.log(aprovados);//[ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
aprovados.sort()//.sort ordena o array, ex: 123 ou abc
console.log(aprovados);//[ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

//formas de deletar um ou mais elementos da array
delete aprovados[1];//ele nao exclui o indice, apenas a palavra ali, ou seja, retornan no indice 1, undefined
console.log(aprovados[1]);//undefined
console.log(aprovados[2]);//bia

aprovados = ["Bia", "Carlos", "Ana"];

///////////////////////////////////////// METODO SPLICE /////////////////////////////////////////////

aprovados.splice(1/*indice*/,1/*quantos elementos excluir*/);//.splice tbm add, como tbm remove e tbm add e remover
console.log(aprovados);

//add elementos e excluindo
aprovados.splice(1,2, "Elemento 1", "ELemento 2");//apartir do indice 1, ele vai excluir 2 elementos e add os outros 2
console.log(aprovados);//[ 'Bia', 'Elemento 1', 'ELemento 2' ]

//somente add elementos
aprovados.splice(1, 0, "Julia", "Mario");
console.log(aprovados);//[ 'Bia', 'Julia', 'Mario', 'Elemento 1', 'ELemento 2' ]