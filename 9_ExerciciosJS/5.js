function maiorOuIgual(numero1, numero2){
   if(typeof numero1 === typeof numero2){
    console.log(numero1 >= numero2);
   }else{
       console.log(false);
   };
};

maiorOuIgual(0, 0);
maiorOuIgual(0, "0");
maiorOuIgual(5, 1);