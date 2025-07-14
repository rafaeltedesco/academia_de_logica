# Exercício 05 - Loops

Crie um arquivo loops.js:
```
// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break
console.log("Loop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

// Loop for com continue
console.log("Pulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula o resto da iteração
    }
    console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("Lista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}
```

Executar o arquivo no terminal:
```
node loops.js
```

---

#### DESAFIO

---

1. Crie um loop que imprima a tabuada do 7 (de 1 a 10)
2. Crie um array de números e calcule a soma deles usando um loop
3. Crie um loop que identifique o menor valor em um array de números
