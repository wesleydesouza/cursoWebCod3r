function buscarPalavrasSemelhantes(filtro, array){
   const array2 = [];
   for(const letra of array){
       if(letra.includes(filtro)){
        array2.push(letra);
       };
   };
   console.log(array2);
};
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]); // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]); // retornará []