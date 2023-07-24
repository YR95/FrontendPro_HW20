function getSum() {
    let sum = 0;
    return function (y) {
        return sum = sum + y;
    };
};

let result = getSum();
console.log(result(3));
console.log(result(5));
console.log(result(20));
