let productList = [
    {name: "Dell Inspiron 15 Laptop", price: 749.99, category: "Computers"},
    {name: "Latitude 3540 Laptop", price: 1089.00, category: "Computers"},
    {name: "LG 86” LED 4K TV", price: 1099.99, category: "TVs"},
    {name: "Insignia™ 50” LED 4K TV", price: 219.99, category: "TVs"},
    {name: "Sennheiser Momentum 4 Headphone", price: 275.99, category: "Audio"},
    {name: "Sennheiser RS 175 Headphone", price: 199.99, category: "Audio"},
    {name:"Sony PlayStation 5", price: 499.99, category:"Video Games"},
    {name:"Microsoft Xbox Series X", price: 499.99, category:"Video Games"},
]

let category = "Audio"
let filteredByCategory = productList.filter(product => {
    return product.category == category
})

let price = 600;

let filteredByPrice = productList.filter(product => {
    return product.price > price
})

console.log(filteredByPrice)