function filtrarPorQuantidadeDeDigitos(array, qunt){
  
    const array2 = array.filter(e => String(e).length == qunt);
    console.log(array2);
}
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2); // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1);    // retornará [5, 9, 1]