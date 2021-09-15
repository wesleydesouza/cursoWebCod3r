//Classes ECMAScript 2015
class Lancamento {
    constructor(nome = "Genérico", valor = 0){
        this.nome = nome;
        this.valor = valor;
    };
};

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    };

    addLancamentos(...lancamentos) {//vai receber um ou mais lancamentos, formando uma array
        lancamentos.forEach(l => this.lancamentos.push(l))
    };

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    };
};

const salario = new Lancamento("Salario", 45000);
const contaDeLuz = new Lancamento("Luz", -220);

const contas = new CicloFinanceiro(6, 2021);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());