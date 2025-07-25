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
];

// 1. Mostrar uma lista formatada de todos os produtos usando forEach
inventory.forEach((item, index) => {
  const averageRating = (
    item.reviews.reduce((sum, rating) => sum + rating, 0) / item.reviews.length
  ).toFixed(2);
  console.log(
    `${index + 1}. ${item.name} | Preço: R$ ${item.price} | Estoque: ${
      item.stock
    } | Avaliação Média: ${averageRating}`
  );
});

// 2. Filtrar produtos que estão em estoque (stock > 0)
const productsInStock = inventory.filter((item) => item.stock > 0);
console.log("\nProdutos em estoque:", productsInStock);

// 3. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
const productsCategoryPrice = inventory.filter((item) => {
  return item.category === "Eletrônicos" && item.price < 1000;
});
console.log(
  "\nProdutos eletrônicos com preço menor que 1000:",
  productsCategoryPrice
);

// 4. Verificar se há algum produto sem estoque
const hasOutOfStock = inventory.find((item) => item.stock === 0);
if (hasOutOfStock) {
  console.log("\nHá pelo menos um produto sem estoque.");
} else {
  console.log("\nTodos os produtos estão em estoque.");
}

// 5. Verificar se todos os produtos têm pelo menos uma avaliação (review)
const hasOutOfReviews = inventory.every((item) => item.reviews.length > 0);
if (hasOutOfReviews) {
  console.log("\nTodos os produtos têm pelo menos uma avaliação.");
} else {
  console.log("\nHá pelo menos um produto sem avaliação.");
}

// 6. Encontrar o índice do produto "Cafeteira"
const meetingIndex = inventory.findIndex((item) => item.name === "Cafeteira");
console.log("\nÍndice do produto 'Cafeteira':", meetingIndex);

// 7. Encontrar o primeiro produto da categoria "Vestuário"
const firstApparelProduct = inventory.find(
  (item) => item.category === "Vestuário"
);
console.log(
  "\nPrimeiro produto da categoria 'Vestuário' encontrado:",
  firstApparelProduct
);

// 8. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
function searchProductsByName(products, searchTerm) {
  return products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
const result = searchProductsByName(inventory, "fone");
console.log("\nProdutos encontrados pelo nome:", result);

// 9. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
const inventoryWithRatings = inventory.map((item) => {
  const averageRating =
    item.reviews.reduce((sum, review) => sum + review, 0) / item.reviews.length;
  return {
    ...item,
    averageRating: averageRating.toFixed(2),
  };
});

console.log("\nProdutos com média de avaliações:", inventoryWithRatings);

// 10. Encontrar o produto com a maior média de avaliações
const topRatedProduct = inventoryWithRatings.reduce((highest, current) => {
  return current.averageRating > highest.averageRating ? current : highest;
});

console.log("\nProduto com a maior média de avaliações:", topRatedProduct);
