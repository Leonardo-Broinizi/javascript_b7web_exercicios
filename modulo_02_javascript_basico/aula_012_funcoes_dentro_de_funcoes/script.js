function addSquares(a, b) {
    /*
    function square(x) {
        return x * x;
    }*/
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 5));