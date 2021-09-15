const frutas = ["banana", "maca", "melao","kiwi"];

//.pop()
frutas.pop(); // excluir o ultimo elemento
console.log(frutas);

//.push()
frutas.push("uva");//add no ultimo elemento
console.log(frutas);

//.shift()
frutas.shift();//exclui o primeiro elemento
console.log(frutas);

//.unshift()
frutas.unshift("bergamota");//add no primeiro elemento
console.log(frutas);

//.splice()

//adiciona
frutas.splice(2, 0, "banana", "limao");
console.log(frutas);

//remove
frutas.splice(3, 1);
console.log(frutas);

//.slice()

//ele copia determinados indices e gera um novo array
 const frutas2 = frutas.slice(2);//apartir do indice 2
 console.log(frutas2);

 const frutas3 = frutas.slice(1, 4)//pega o indice um ate o 3, ele nao pega o 4
 console.log(frutas3);//[ 'maca', 'banana', 'melao' ] o original [ 'bergamota', 'maca', 'banana', 'melao', 'uva' ]