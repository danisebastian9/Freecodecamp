// This code will take some product and will calculate the tax rate and shipping price at its Noob way. 

function calculateTotal(items, options) {
    let t = 0
    items.foreach(i => {
        t += i.price * i.quan
    })
    t = t - t * (options.dis || 0)
    t = t * 1.1
    t = t + (options.ship || 5 )
    return t 
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