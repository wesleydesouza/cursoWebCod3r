function repetir(valor, numeroRepeticao){
    let array = [];
    
    for(i = 0; i < numeroRepeticao; i++){
        array.push(valor);
    };
    console.log(array);
};
repetir("código", 2);
repetir(7, 3);