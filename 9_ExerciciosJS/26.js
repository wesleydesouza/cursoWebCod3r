function removerVogais(palavra){
    console.log(palavra.replace(/[aeiou]/gi, ""));
};
//ou
/*function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    vogais.forEach( vogal => frase = frase.replace(vogal, '') );
    return frase;
    };
    */
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
