class SuperPoder{
    constructor(poder){
        this.poder = poder;
    };
};

class Pessoa extends SuperPoder{
    constructor(poder = "força"){
        super(poder);
    };
};

let pessoa = new Pessoa("Super velocidade");

console.log(pessoa);