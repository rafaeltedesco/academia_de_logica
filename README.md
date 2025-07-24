# Academia de Lógica!

---

## Repositório destinado aos exercícios da Academia de Lógica resolvidos pelo G15 

**Guia de Git para Iniciantes: Usando Git e GitHub em um Projeto Real Compartilhado**

---

### ✨ Visão Geral

Este documento é um guia prático para quem está iniciando no uso do Git e GitHub, especialmente em contextos reais de equipe. Vamos abordar:

* Criação e mudança de branch
* Verificação da branch atual
* Subida de código para repositórios compartilhados
* Correção de conflitos
* Cuidados com a branch `main`

---

### 🔶 1. Configuração Inicial

Certifique-se de ter Git instalado. Depois, configure seu nome e email:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

---

### 📂 2. Clonar um Repositório do GitHub

```bash
git clone https://github.com/usuario/nome-do-repositorio.git
```

Entre na pasta:

```bash
cd nome-do-repositorio
```

---

### 🔹 3. Verificar em Qual Branch Você Está

```bash
git branch
```

A branch com \* antes do nome é a atual.

---

### 🌐 4. Criar e Trocar de Branch

```bash
git checkout -b nome-da-nova-branch
```

Isso cria e muda para essa branch. Para mudar de branch:

```bash
git checkout nome-da-branch
```

---

### 📁 5. Ver Todas as Branches Remotas

```bash
git branch -r
```

---

### ✉️ 6. Enviar Mudanças Para o GitHub

1. Adicione arquivos:

```bash
git add .
```

2. Faça commit:

```bash
git commit -m "Mensagem clara do que foi feito"
```

3. Suba para o GitHub:

```bash
git push -u origin nome-da-branch
```

---

### ❌ 7. Corrigir Conflitos de Merge

Se, ao subir a branch, aparecer erro dizendo que existem conflitos:

1. Traga as mudanças mais recentes da `main`:

```bash
git pull origin main
```

2. O Git indicará os arquivos com conflito. Eles vão ter marcações como:

```diff
<<<<<<< HEAD
(sua versão)
=======
(versão da main)
>>>>>>> main
```

3. Edite os arquivos manualmente, mantendo o que for correto.
4. Depois:

```bash
git add .
git commit -m "Resolvendo conflitos"
git push
```

---

### 🛡️ 8. Cuidados com a Branch `main`

* **Nunca desenvolva direto na `main`**.
* Sempre crie uma branch para novas features ou correções.
* Antes de subir algo novo, garanta que a `main` está atualizada:

```bash
git checkout main
git pull origin main
```

* Mantenha sua branch atualizada com relação à `main`:

```bash
git checkout sua-branch
git pull origin main
```

---

### 🔗 9. Merge de Branch no GitHub

* No GitHub, crie um Pull Request (PR).
* Peça revisão de código se necessário.
* Resolva conflitos se houverem.
* Dê merge na `main` só quando tudo estiver testado.

---

### 📅 10. Fluxo Recomendado em Equipe

1. Sempre crie uma branch por tarefa.
2. Suba para o GitHub com commits claros.
3. Mantenha sua branch atualizada com a `main`.
4. Crie PRs pequenos e frequentes.
5. Resolva conflitos com cuidado.
6. Nunca faça `push` direto na `main`.

---

### 🚀 Dicas Extras

* Use `git status` com frequência para ver o que está acontecendo.
* Em caso de erro, leia com atenção a mensagem do Git.
* Nomeie bem as branches, ex: `feature/cadastro-usuario`, `bugfix/login`

---

### 📄 Comandos Rápidos

```bash
git status             # Ver arquivos modificados
git branch             # Ver branch atual
git checkout -b nova   # Criar nova branch
git add .              # Adicionar arquivos
git commit -m "msg"     # Commit
git push -u origin x   # Subir para GitHub
```

---

