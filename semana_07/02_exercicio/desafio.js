// 1. Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto
// 2. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)
// 3. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos

const products = [
    
    { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
    { id: 2, name: "Tablet", price: 400, category: "Eletrônicos" },
    { id: 3, name: "Camisa", price: 30, category: "Vestuário" } ,
    { id: 4, name: "Arroz", price: 10, category: "Alimentício" },
    { id: 5, name: "Vaso", price: 500, category: "Decoração" },
]

console.log ("\nLista de produtos: \n ")
products.forEach((product, index) => {
	console.log(`${index + 1}. Name: ${product.name} - Category: ${product.category}`)
})

const priceWithTax = products.map((product) => {
    return {
        ...product,
        price: product.price + (product.price * 0.15) }
})

console.log ("\nProdutos com impostos: \n ")
priceWithTax.forEach((product, index) => {
   	console.log(`${index + 1}. Name: ${product.name} - Price: R$${product.price}`)
})

let price = 0
const totalPrice = priceWithTax.map((product) => {
    return {
        ...product,
        price: price += product.price,
    }
})

totalPrice.forEach((product, index) => {
    if (index === products.length - 1) {
        console.log("\nTotal price of products - with tax: ", product.price)
    }
})
