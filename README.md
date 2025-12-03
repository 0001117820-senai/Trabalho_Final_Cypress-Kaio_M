"# S.A_Cypress---Kaio" 

# 📘 README.md — Fire Alert (Testes End-to-End · Cypress)

## 🔥 Fire Alert – Testes Automatizados com Cypress

Este repositório contém a suíte de testes **End-to-End (E2E)** do projeto **Fire Alert**, cobrindo as páginas:

* `login.html`
* `denuncia.html`

Os testes foram escritos em **Cypress**, garantindo validação visual, funcional, estrutural e responsiva da aplicação.

---

## 📦 1. Pré-requisitos

Antes de executar os testes, você precisa ter instalado:

* **Node.js** (versão 16+)
* **npm**

Verifique instalando:

```bash
node -v
npm -v
```

---

## 📥 2. Instalação do Cypress

Dentro do diretório do projeto, execute:

```bash
npm install
npm install cypress --save-dev
```

---

## ▶️ 3. Como rodar os testes

### **Abrir o Cypress no modo interativo:**

```bash
npx cypress open
```

* Selecione **E2E Testing**
* Escolha o navegador
* Execute os testes `login.cy.js` e `denuncia.cy.js`

---

## 🧪 4. Quais testes são realizados?

A seguir está a documentação dos cenários cobertos por cada arquivo de teste.

---

# 🔐 5. Testes da Página de Login (`login.cy.js`)

### **GRUPO 1 — Testes Visuais e de Interface (UI)**

✔ Validação da logo
✔ Validação do título e cor (`text-danger`)
✔ Verificação do subtítulo
✔ Conferência de placeholders e atributos (`required`, `type=password`)
✔ Verificação do botão de login (classe Bootstrap + cor correta)

---

### **GRUPO 2 — Testes Funcionais de Lógica**

✔ **Login bem-sucedido**
• Confirma alerta “Login realizado com sucesso!”
• Redirecionamento para `index.html`

✔ **Senha incorreta**
✔ **E-mail inexistente**
✔ **Campos vazios (HTML5 Required)**
• Confirma bloqueio de envio
• Confirma permanência na página
• Garante que alerta de sucesso NÃO aparece

---

# 🚨 6. Testes da Página de Denúncia (`denuncia.cy.js`)

### **GRUPO 1 — Testes de Interface e Navegação**

✔ Exibição do logo
✔ Exibição e quantidade correta de itens no menu
✔ Conferência do título “Denúncia de Incêndio”
✔ Conferência de placeholders
✔ Verificação do texto do botão de upload

---

### **GRUPO 2 — Funcionalidades Essenciais**

✔ Upload de imagem
• Confirma preview visual
• Confirma arquivo anexado corretamente

✔ Envio completo de denúncia
• Verifica alerta: “Denúncia enviada com sucesso”
• Valida limpeza do formulário após envio

---

### **GRUPO 3 — Testes de Responsividade (Mobile)**

✔ Simulação de viewport `iPhone X`
✔ Verifica flex-direction para layout em coluna
✔ Header responsivo
✔ Menu com `flex-wrap: wrap`

---

## 📂 7. Estrutura dos arquivos de teste

## 📂 Estrutura do Projeto

Abaixo está a organização dos arquivos no repositório. A pasta `node_modules` não é enviada, pois é gerada automaticamente na instalação.

```
📁 PROJETO-FIRE-ALERT
│
├── 📂 cypress
│   ├── 📂 e2e
│   │   ├── 📜 login.cy.js       # Testes da Tela de Login e Segurança
│   │   └── 📜 denuncia.cy.js    # Testes do Formulário e Upload
│   └── 📂 support               # Arquivos de suporte do Cypress
│── 📂 node_modules
├── 📂 js                        # Scripts auxiliares
├── 📜 login.html                # Página de Login (HTML corrigido)
├── 📜 denuncia.html             # Página de Denúncia
├── 📜 auth.js                   # Lógica de autenticação (JS)
├── 📜 scriptdenuncia.js         # Lógica de preview de imagem (JS)
├── 📜 style.css                 # Estilos do Login
├── 📜 styledenuncia.css         # Estilos da Denúncia
├── 📜 cypress.config.js         # Configuração do Cypress
├── 📜 package.json              # Lista de dependências (Cypress)
└── 📜 README.md                 # Documentação do projeto
---

## 🧑‍💻 8. Autor

* **Kaio Marcelo Nazário de Faria**
* Testes automatizados por Cypress

---

