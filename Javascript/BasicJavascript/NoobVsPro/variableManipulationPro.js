// This code is the fixed and final version of the variableManipulationAdvanced.js
const TAX_RATE = 1.1 
const SHIPPING_DEFAULT = 5

function calculateTotal(items, {shipping = SHIPPING_DEFAULT, discount = 0 } = {} ) {
    if (items == null || items.length === 0) return 0

    const itemCost = items.reduce((total, item) => {
        return total + item.price * item. quantity
    }, 0)
    const discountRate = 1 - discount

    return itemCost * discountRate * TAX_RATE + shipping
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