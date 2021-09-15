function somarNumeros(array){
    const result =  array.reduce((acumulador, atual) => acumulador + atual );
    console.log(result);
};

somarNumeros([10, 10, 10]);
somarNumeros([15, 15, 15, 15]);