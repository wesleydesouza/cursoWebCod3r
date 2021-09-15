//factory é uma funcao que retorna um obj, um novo obj

//factory simples
function criarPessoa(){
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}

console.log(criarPessoa());

//desafio
function criarCarro(marca, modelo, numeroPortas){ 
    return {
        marca,
        modelo,
        numeroPortas
    }   
}

console.log(criarCarro('fiat', 'uno', 4));

