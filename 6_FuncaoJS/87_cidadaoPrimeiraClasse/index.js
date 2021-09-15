//funcao em JS é first-class object
//Higher-order function


// criar de forma literal
function fun1(){}

// Armezenar em uma variavel
const fun2 = function () {}

//Armazenar em uma array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

// Passar funcao como parametro
function run(fun){
    fun()//só imprime "executando" por conta dessa funcao "fun"
}

run(function () { console.log("Executando...") })

// Uma funcao pode retornar/conter uma funcao
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)