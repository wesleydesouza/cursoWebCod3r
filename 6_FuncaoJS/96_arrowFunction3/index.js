let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global/*no node e window, na web*/)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)//module.exports é equivalente ao this na função arrow...

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//nesse caso retorna false, arrow function anula o metodo bind