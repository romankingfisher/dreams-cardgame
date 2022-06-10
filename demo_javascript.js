console.log('demo file')

// currying
let sum = function(a) {
    return function (b) {
        if (b) {
            return sum(a+b);
        }
        return a;
    }
}

console.log(sum(3)(4)(4)()) 