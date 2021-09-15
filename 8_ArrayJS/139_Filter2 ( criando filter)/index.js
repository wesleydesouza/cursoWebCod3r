Array.prototype.filter2 = function(callback){
    const newArray = []; 
    for(i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        };
    };
    return newArray;
};
//filter é uma funcao callback que retorna true ou false recebendo como parametro (nome, indice e array)

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }
]

console.log(produtos.filter2(function(p) {
    return false;
}));

const caro = produto => produto.preco >= 1000;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));