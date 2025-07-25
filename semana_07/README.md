# Documentação: Métodos JavaScript Usados

Este documento apresenta de forma resumida os principais métodos e funcionalidades JavaScript utilizados para resolver exercícios de manipulação de arrays e objetos.

---

#### Objetivos

- Relembrar os conceitos de funções, spread e rest
- Utilizar corretamente os métodos de array: map, filter, find, findIndex, forEach, every e some
- Resolver problemas do mundo real usando métodos de array
- Combinar diferentes métodos para soluções mais elegantes

## 1. **forEach**

* **O que é:** Executa uma função para cada item do array.
* **Como funciona:** Não retorna um novo array.
* **Quando usar:** Quando você quer apenas percorrer todos os itens e executar uma ação (como mostrar no console ou somar valores).
* **Exemplo prático:** Mostrar nomes dos itens de uma lista de compras.

```js
const compras = ["Arroz", "Feijão", "Macarrão"];
compras.forEach((item) => console.log(item));
```

---

## 2. **map**

* **O que é:** Cria um novo array transformando cada item original com uma função.
* **Como funciona:** Retorna um novo array com o mesmo número de elementos.
* **Quando usar:** Quando você precisa alterar os dados originais sem modificá-los.
* **Exemplo prático:** Criar uma nova lista de preços com desconto.

```js
const precos = [100, 200, 300];
const comDesconto = precos.map((preco) => preco * 0.9);
// [90, 180, 270]
```

---

## 3. **filter**

* **O que é:** Cria um novo array com os elementos que **passam em uma condição**.
* **Como funciona:** Só mantém os elementos que retornam `true` no teste.
* **Quando usar:** Quando você quer **selecionar** ou **filtrar** dados com base em uma regra.
* **Exemplo prático:** Filtrar apenas os alunos aprovados (nota >= 7).

```js
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);
// [{ nome: "Ana", nota: 8 }]
```

---

## 4. **find**

* **O que é:** Retorna o **primeiro elemento** que satisfaz a condição.
* **Como funciona:** Para assim que encontra.
* **Quando usar:** Quando precisa de apenas 1 item que satisfaz a regra.
* **Exemplo prático:** Encontrar um produto pelo nome.

```js
const produtos = [
  { nome: "x" },
  { nome: "y" }
];
const resultado = produtos.find(p => p.nome === "y");
```

---

## 5. **findIndex**

* **O que é:** Retorna o **índice** do primeiro item que satisfaz a condição.
* **Como funciona:** Se não encontrar, retorna -1.
* **Quando usar:** Quando você precisa da posição do item.
* **Exemplo prático:** Verificar em que posição está o usuário "João".

```js
const nomes = ["Ana", "João"];
const indice = nomes.findIndex(n => n === "João"); // 1
```

---

## 6. **some**

* **O que é:** Verifica se **pelo menos um** item satisfaz a condição.
* **Retorna:** `true` ou `false`.
* **Exemplo prático:** Verificar se alguém tem mais de 18 anos.

```js
const idades = [15, 16, 20];
const temAdulto = idades.some(idade => idade >= 18); // true
```

---

## 7. **every**

* **O que é:** Verifica se **todos** os itens satisfazem a condição.
* **Retorna:** `true` ou `false`.
* **Exemplo prático:** Verificar se todos os alunos foram aprovados.

```js
const notas = [7, 8, 9];
const todosAprovados = notas.every(nota => nota >= 6); // true
```

---

## 8. **Spread Operator (...):**

* **O que é:** Copia os valores de um array ou objeto.
* **Quando usar:** Para clonar, combinar ou adicionar itens.
* **Exemplo prático:** Adicionar uma nova fruta à lista sem alterar a original.

```js
const frutas = ["maçã", "banana"];
const novasFrutas = [...frutas, "uva"];
// ["maçã", "banana", "uva"]
```

* **Exemplo com objeto:**

```js
const pessoa = { nome: "João" };
const novaPessoa = { ...pessoa, idade: 30 };
```

---

## 9. **Funções**

* **O que é:** Blocos reutilizáveis de código.
* **Como funciona:** Recebe parâmetros, executa e pode retornar valor.
* **Exemplo prático:** Criar uma função que retorna a soma de dois números.

```js
function soma(a, b) {
  return a + b;
}
```

---

## 10. **Rest Parameters (...):**

* **O que é:** Agrupa vários argumentos em um array.
* **Quando usar:** Quando a função precisa aceitar um número variável de argumentos.
* **Exemplo prático:** Criar uma função que soma qualquer quantidade de números.

```js
function soma(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}

soma(1, 2, 3); // 6
```

---

## Conclusão

Esses recursos são essenciais para manipulação de dados em arrays e objetos JavaScript de forma moderna, eficiente e legível. Usar cada método no momento certo deixa seu código mais limpo e fácil de manter.
