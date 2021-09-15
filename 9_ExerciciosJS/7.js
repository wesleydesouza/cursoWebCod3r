function estaEntre(minimo, maximo, numero, inclusivo = false){
    if(inclusivo){
        if(numero >= minimo && numero <= maximo){
            console.log(true);
        }else{
            console.log(false);
        }
    }else{
        if(numero > minimo && numero < maximo){
            console.log(true);
        }else{
            console.log(false);
        };
    };
};

estaEntre(10, 100, 50);
estaEntre(16, 100, 160); 
estaEntre(3, 150, 3);
estaEntre(3, 150, 3, true);