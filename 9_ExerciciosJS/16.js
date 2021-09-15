function checarAnoBissexto(ano){
    if(ano%400==0 || ano%4==0 && ano%100!=0){
        console.log(true);
    }else{
        console.log(false);
    };
};
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400