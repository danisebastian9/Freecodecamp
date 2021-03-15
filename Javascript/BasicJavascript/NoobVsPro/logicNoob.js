// The code will run the positive numbers into string and the negative inside parenthesis as string also.

function toAccounting(n) {
    if (n < 0) {
        return "(" + Math.abs(n) + ")"
    } else {
        return n.toString()
    }
}

console.log(toAccounting(undefined)) // will fail
console.log(toAccounting(0))         // 0
console.log(toAccounting(10))        // 10
console.log(toAccounting(-5))        // (5)

