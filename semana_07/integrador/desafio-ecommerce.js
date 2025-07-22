const inventory = [
	{
		id: 1,
		name: "Smartphone",
		price: 500,
		stock: 10,
		category: "Eletrônicos",
		reviews: [4, 5, 3, 5, 4],
	},
	{
		id: 2,
		name: "Notebook",
		price: 1200,
		stock: 5,
		category: "Eletrônicos",
		reviews: [5, 4, 5, 5, 3],
	},
	{
		id: 3,
		name: "Camiseta",
		price: 25,
		stock: 20,
		category: "Vestuário",
		reviews: [4, 3, 4, 5],
	},
	{
		id: 4,
		name: "Cafeteira",
		price: 100,
		stock: 8,
		category: "Cozinha",
		reviews: [3, 2, 5, 4, 2],
	},
	{
		id: 5,
		name: "Fones de Ouvido",
		price: 80,
		stock: 15,
		category: "Eletrônicos",
		reviews: [4, 4, 5, 5, 5, 4],
	},
	{
		id: 6,
		name: "Calça Jeans",
		price: 45,
		stock: 0,
		category: "Vestuário",
		reviews: [4, 3, 4],
	},
	{
		id: 7,
		name: "Liquidificador",
		price: 70,
		stock: 3,
		category: "Cozinha",
		reviews: [3, 4, 3, 5],
	},
]

inventory.forEach((item) => {
    console.log("-------------------");
    console.log("ID:", item.id);
    console.log("Nome:", item.name);
    console.log("Preço:", item.price);
    console.log("Estoque:", item.stock);
    console.log("Categoria:", item.category);
    console.log("Avaliações:", item.reviews.join(", "));
    console.log("-------------------");
});

const produtosWithStock = inventory.filter((item) => item.stock > 0);
console.log("Produtos com estoque:", produtosWithStock);


const produtosEletronicos = inventory.filter((item) => item.category === "Eletrônicos" && item.price < 1000);

console.log("Produtos Eletrônicos com preço abaixo de R$1000:", produtosEletronicos);

const someProductNotHasStock = inventory.some((item) => item.stock === 0);
console.log("Algum produto não tem estoque?", someProductNotHasStock);

const everyProductHasReview = inventory.every((item) => item.reviews.length > 0);
console.log("Todos os produtos têm avaliações?", everyProductHasReview);

const indexOfCafeteria = inventory.findIndex((item) => item.name === "Cafeteira");
console.log("Índice do produto 'Cafeteira':", indexOfCafeteria);


const firstProductVestuario = inventory.find((item) => item.category === "Vestuário");

console.log("Primeiro produto de Vestuário:", firstProductVestuario);

function searchProductByTerm(term) {
    const results = inventory.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
    );
    return results;
}

console.log("Busca por 'fone':", searchProductByTerm("fone"));

inventory.forEach((item) => {
    const averageReview = item.reviews.reduce((acc, review) => acc + review, 0) / item.reviews.length;

    item.averageReview = averageReview;
});

console.log("Inventário com média de avaliações:", inventory);


let maiorMedia = {};
inventory.forEach((item) => {
    if (!maiorMedia.averageReview || item.averageReview > maiorMedia.averageReview) {
        maiorMedia = item;
    }
});

console.log("Produto com maior média de avaliações:", maiorMedia);