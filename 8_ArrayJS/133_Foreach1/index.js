const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];
//Foreach tem 3 parametros, podendo ser passados (nome, indice e array)
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
});
////////////// parametro array com arrow function

aprovados.forEach((nome, indice, array) => console.log(`${indice + 1}) ${nome}
 Array) ${array}`));

 //// outro exemplo
 
 const exibirAprovados = aprovado => console.log(aprovado);

 aprovados.forEach(exibirAprovados);

 // seria o mesmo como:
 aprovados.forEach( aprovado => console.log(aprovado));
 
 //ou
 aprovados.forEach(function(aprovados){
     console.log(aprovados);
 });