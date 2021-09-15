//get = serve para acessar o valor do atributo
//set =  serve para modificar o valor desse atributo.

const sequencia = {
    _valor: 1, //convenção (uma variavel pretendida ter acesso internamente)
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        };
    }
};

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900; //nao passa o valor, por conta da validação do set
console.log(sequencia.valor, sequencia.valor);

//esclarecimetos

/*
O getter, ou get, que serve para buscar o valor de um atributo:

let Pessoa = {
    nome: "João",
    sobrenome: "Santos",
    idioma : "Português",
 
    get linguagem() {
      return this.idioma
    },
 
  }
console.log(Pessoa.linguagem)
console.log(Pessoa)
No console.log(Pessoa.linguagem), ele vai buscar o valor do atributo idioma por meio do getter. Ao imprirmos Pessoa, temos:

{
  nome: 'João',
  sobrenome: 'Santos',
  idioma: 'Português',
  linguagem: [Getter]
}
Agora, com o setter, ou set, que serve para modificar o valor do atributo:

let Pessoa = {
    nome: "João",
    sobrenome: "Santos",
    idioma : "",
 
    set linguagem (lang) {
        this.idioma = lang;
      }
 
  }
Pessoa.linguagem = "Português"
console.log(Pessoa.idioma)
console.log(Pessoa)
Em Pessoa.linguagem, chamamos o setter passando o valor do atributo idioma, e ele foi settado. Agora, imprimindo Pessoa, temos:

{
  nome: 'João',
  sobrenome: 'Santos',
  idioma: 'Português',
  linguagem: [Setter]
}
//////////////////////////////////////////////////////////////////////

Perceba que o set é uma propriedade de Pessoa que recebe o nome linguagem:

    set linguagem (lang) {
        this.idioma = lang;
      }
Então quando a gente faz Pessoa.linguagem = "Português", estamos passando para ele o valor da String (Português) que ele de fato recebe por meio do lang, e define o valor de this.idioma = lang

E por isso o valor de idioma imprime "Português"!

Perceba que poderíamos passar quaisquer valores para o set, pois o valor de linguagem é any, então ele aceita qualquer coisa, por exemplo um Array:

let Pessoa = {
    nome: "João",
    sobrenome: "Santos",
    idioma : "",
 
    set linguagem (lang) {
        this.idioma = lang;
      }
 
  }
Pessoa.linguagem = ["Nossa", "Que", "Loucura"]
console.log(Pessoa.idioma)
console.log(Pessoa)
Mas, pela consistência do exemplo, mantivemos como uma simples String mesmo.
*/