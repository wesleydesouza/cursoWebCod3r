function removerPropriedade(obj, prop){
    const copia = Object.assign({}, obj);
    delete copia[prop];
    console.log(copia);
};

removerPropriedade({a: 1, b: 2}, "a");