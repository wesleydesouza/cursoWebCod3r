console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
    return this.split("").reverse().join("");
};

console.log("Wesley".reverse());

Array.prototype.first = function(){
    return this[0];
};

console.log([1, 2, 3, 4].first());
console.log(["a", "b", "c"].first());

String.prototype.toString = function(){
    return "Lascou td";
};

console.log("wesley".reverse());

const l = ["we", "sl", "ey"];

console.log(l[0].split(""));
console.log(l.join(""));