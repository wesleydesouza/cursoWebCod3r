function segundoMaior(array) {
    let primeiro = 0;
    let segundo = null;

    array.forEach((numero, indice) => {
        if (numero > array[primeiro]) {
            primeiro = indice;
        };
    });
    array.splice(primeiro, 1);

    array.forEach(numero => {
        if (numero > segundo) {
            segundo = numero;
        };
    });
    console.log(segundo);
};

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6