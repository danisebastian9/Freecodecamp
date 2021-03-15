// This advanced version of the variableManipulationNoob.js fixes some bugs and gives better names for variables. 

const TAX_RATE = 1.1 
const SHIPPING_DEFAULT = 5

function calculateTotal(items, options = {} ) {   // Here it's calling the object itself "{}" fixing issues when calling itself in the results
    if (items == null || items.length === 0) return 0  // Bugs fixed by giving 0 when there's no value or invalid value

    let total = 0 
    items.foreach(item => {
        total += item.price * item.quantity
    })
    total = total - total * (options.discount || 0)
    total = total * TAX_RATE
    if (options.shipping !== 0) {
        total = total + (options.shipping || SHIPPING_DEFAULT)
    }
    return total

}

const testItems = [
    { price: 15, quan: 2},
    { price: 20, quan: 1},
    { price: 5, quan: 4}
]

console.log(calculateTotal(testItems, {}))            // 82
console.log(calculateTotal(testItems, { ship: 0 }))   // 82
console.log(calculateTotal(testItems, { dis: .75}))   // 24.25
console.log(calculateTotal(testItems, { ship: 12}))   // 89