function receberSomenteOsParesDeIndicesPares(array){

        console.log(array.filter((nome, indice)=> nome%2==0 && indice%2==0));
};

receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]);
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]);