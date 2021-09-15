let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let i = 0; i < 15; i++){
    ver(list[i]);
}

function ver(n){
    if(n%3==0 && n%5==0){
        n = "FizzBuzz";
    }else if(n%5==0){
        n = "Buzz";
    }else if(n%3==0){
        n = "Fizz";
    }
    console.log(n);
};