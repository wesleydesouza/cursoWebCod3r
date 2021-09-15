const ferrari = {
    modelo: "F40",
    velMax: 324
};

const volvo = {
    modelo: "V40",
    velMax: 200
};

console.log(ferrari.__proto__); //return {}
console.log(ferrari.__proto__ === Object.prototype); // return true
console.log(volvo.__proto__ === Object.prototype); //return true
console.log(Object.prototype.__proto__); //retun null

function MeuObjeto() {};
console.log(typeof Object, typeof MeuObjeto); //function function
console.log(Object.prototype, MeuObjeto.prototype); //[Object: null prototype] {} {}