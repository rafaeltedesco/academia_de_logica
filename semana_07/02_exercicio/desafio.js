const produtos = [
    {
        nome: 'Notebook',
        categoria: 'Eletrônicos',
        preco: 2500,
    },
    {
        nome: 'Camiseta',
        categoria: 'Vestuário',
        preco: 50,
    },
    {
        nome: 'Tênis',
        categoria: 'Calçados',
        preco: 150,
    },
    {
        nome: 'Smartphone',
        categoria: 'Eletrônicos',
        preco: 3000,
    },
    {
        nome: 'Calça Jeans',
        categoria: 'Vestuário',
        preco: 100,
    },
];

const stringFormatas = produtos.map(produto => {
    return `${produto.nome} - ${produto.categoria}`
});

console.log(stringFormatas);

const imposto = 1.15;
const precosFormatados = produtos.map(produto => {
    return produto.preco * imposto;
});

console.log(precosFormatados);

let soma = 0;

produtos.forEach(produto => {
    soma += produto.preco;
});

console.log(`Soma total: R$ ${soma.toFixed(2)}`);