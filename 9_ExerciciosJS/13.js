function filtrarNumeros(array){
    const array2 = array.filter(p => typeof p === "number");
    console.log(array2)
}
filtrarNumeros(["Javascript", 1, "3", "Web", 20]);
filtrarNumeros(["a", "c"]);