function contarCaractere(carac, string){
    let contar = 0;
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) === carac){
            contar++;
        };
    };
    console.log(contar);
};
contarCaractere("r", "A sorte favorece os audazes"); // retornarĂ¡ 2
contarCaractere("c", "Conhece-te a ti mesmo"); // retornarĂ¡ 1
