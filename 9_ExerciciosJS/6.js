function inverso(valor) {
    const tipo = typeof valor;
    if (tipo === "boolean") {
        console.log(!valor);
    } else if (tipo === "number") {
        console.log(-valor);
    } else {
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`);
    };
};
inverso(true);
inverso("6");
inverso(-2000);
inverso("programação");