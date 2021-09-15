function multiplicar(n1, n2) {
    if (n1 >= 0 && n2 >= 0) {

        let temp = n1;

        for (let i = 1; i < n2; i++) {
            n1 += temp;
        };

        console.log(n1);
    };
};

multiplicar(5, 5);
multiplicar(0, 7);
multiplicar(10, 7);
multiplicar(7, 3);