function tratarErroELancar(erro){
    //throw new Error("ocorreu um erro tente novamente");
    //throw "mensagem";
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    };
};

function imprimirNomeGritado(obj){
    try{//tenta isso
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e){//se der erro tratar
        tratarErroELancar(e)
    } finally {//qualquer tipo de resultado com erro ou sem, vai executar o bloco
        console.log("final");
    };
};

const obj = { nome: "Roberto" };
imprimirNomeGritado(obj);