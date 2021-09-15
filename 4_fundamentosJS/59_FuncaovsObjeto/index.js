console.log(typeof Object);//é uma função
console.log(typeof new Object);//é um objeto

const Cliente = function(){};
console.log(typeof Cliente);//function
console.log(typeof new Cliente);//object

class Produto{}; //ES 2015 (ES6)
console.log(typeof Produto);//function
console.log(typeof new Produto);//obje