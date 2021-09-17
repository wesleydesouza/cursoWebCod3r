function inverter(obj){
    const obj2 = Object.keys(obj).reduce(function(object, key){
        object[obj[key]] = key;
        return object;
    }, {});
    console.log(obj2);
};

inverter({ a: 1, b: 2, c: 3}); // retornará { 1: "a", 2: "b", 3: "c"}