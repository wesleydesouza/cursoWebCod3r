//arrow function: vc digita menos e o this sempre vai estar fixo 

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return escondido, faz o uso do parametro sem paranteses quando se faz um
/////////////////////////////////////////////
 let ola = function () {
     return "ola"
 }

 ola = () => "ola"
 ola = _ => "ola" //possui um parametro