function calcularSalario(horasMes, recebeHora){
    let resultado = horasMes*recebeHora;
    console.log(`Seu salário é R$ ${resultado.toFixed(2).replace(".",",")}`);
};
calcularSalario(150, 40.5);