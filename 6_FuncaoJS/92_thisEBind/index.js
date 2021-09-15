const pessoa = {
    saudacao: "bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar()//retorna undefined, conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)//bind é um metodo de amarrar um determinado obj
falarDePessoa()