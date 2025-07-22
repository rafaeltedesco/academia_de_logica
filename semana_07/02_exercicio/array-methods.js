// Exercício 2: forEach e map

const products = [
	{ id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
	{ id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
	{ id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
	{ id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
	{ id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
]

// 1. Usando forEach para imprimir todos os produtos
console.log("Lista de Produtos:")
products.forEach((product, index) => {
	console.log(`${index + 1}. ${product.name} - R$${product.price}`)
})

// 2. Usando map para criar um novo array apenas com nomes dos produtos
const productNames = products.map((product) => product.name)
console.log("\\nNomes dos Produtos:", productNames)

// 3. Usando map para criar um array de produtos com desconto de 10%
const discountedProducts = products.map((product) => {
	return {
		...product,
		price: product.price * 0.9, // 10% de desconto
	}
})

console.log("\\nProdutos com 10% de desconto:")
discountedProducts.forEach((product) => {
	console.log(
		`${product.name} - Original: R$${(product.price / 0.9).toFixed(
			2
		)}, Com desconto: R$${product.price.toFixed(2)}`
	)
})