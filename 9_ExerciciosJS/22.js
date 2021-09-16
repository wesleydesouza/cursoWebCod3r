function funcaoDaSorte(numero){
    let sorteado = Math.floor(Math.random() * 11);
    if(numero === sorteado){
        console.log(`Parabens! O número sorteado foi o ${sorteado}`);
    }else{
        console.log("Que pena! O número sorteado foi o " + sorteado);
    };
};

funcaoDaSorte(10); // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(4); // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5); // retornará "Que pena! O número sorteado foi o 1"