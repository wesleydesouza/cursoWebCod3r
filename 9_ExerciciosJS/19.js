function calcularMedia(array){
    const quntNumeros =  array.length;
    const array2 = array.reduce((somar, atual) => somar + atual);
    console.log(array2/quntNumeros);
};

calcularMedia([0, 10]);
calcularMedia([1, 2, 3, 4, 5]);


