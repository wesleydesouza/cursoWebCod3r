//cadeia de prototipos (protype chain)
Object.prototype.attr0 = 0; //Não recomendado fazer
const avo = { attr1: "a"};
const pai = { __proto__: avo, attr2: "b", attr3: "f"};
const filho = { __proto__: pai, attr3: "c"};

console.log(filho.attr0 ,filho.attr1, filho.attr2, filho.attr3);
/////////////////////////////////////////////////////////////////

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
};

const ferrari = {
    modelo: "F40",
    velMax: 324 //shadowing
};

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}`;//o super chama a função que está acima ao invés de chamar a própria, digamos assim. Quando se tem um objeto pai e um objeto filho que possuem uma função com o mesmo nome o padrão é que se chame a do filho, porém quando utilizamos o super, o que é chamado é a do pai!
    }
};

Object.setPrototypeOf(ferrari, carro); //faz a mesma ligacao do obj pai como se fosse __proto__ dentro do abj como atributo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status()) 