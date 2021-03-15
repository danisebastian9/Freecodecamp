// This is the pro version of the logicNoob.js fixing some bugs and adding everything in a better way. 

function numberToAccountingString(number) {
    if (number == null) return // Safeguard to avoid any undefined inputs. 
    if (number < 0) return `(${Math.abs(number)})`    //guardclass
}
console.log(toAccounting(undefined)) // undefined
console.log(toAccounting(0))         // 0
console.log(toAccounting(10))        // 10
console.log(toAccounting(-5))        // (5)

// backticks ALT GR + "}" key