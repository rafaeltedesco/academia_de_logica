// 1. Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto

const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

const formattedProducts = products.map((product) => {
  return `${product.name} - ${product.category}`;
});
console.log(formattedProducts);

// 2. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)
const productsWithTax = products.map((product) => {
  return (product.price * 1.15).toFixed(2);
});

console.log(productsWithTax);

// 3. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos
let totalSum = 0;
products.forEach((product) => {
  totalSum += product.price;
});
// ! Não precisa retornar nada dentro do forEach. O valor acumulado vai direto na variável totalSum.
console.log("A soma total do produto foi:", totalSum);

// Maneira mais correta de solucionar esse enunciado.⬇️
// const totalSum = products.reduce((accumulator, product) => accumulator + product.price, 0);
