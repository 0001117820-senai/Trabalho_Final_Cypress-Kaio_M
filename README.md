# 📘 README.md — Fire Alert (Testes End-to-End com Cypress)

## 🔥 Fire Alert – Suíte de Testes Automatizados (Cypress)

Este repositório contém a suíte de testes **E2E (End-to-End)** do sistema **Fire Alert**, desenvolvida com o framework **Cypress**, com foco na validação das funcionalidades principais das páginas:

- `login.html`
- `denuncia.html`

Os testes garantem a estabilidade visual, funcional, comportamental e responsiva da aplicação.

---

# 🧭 Índice

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
3. [Pré-requisitos](#-pré-requisitos)
4. [Instalação](#-instalação)
5. [Executando os Testes](#-executando-os-testes)
6. [Estrutura do Projeto](#-estrutura-do-projeto)
7. [Testes Implementados](#-testes-implementados)
   - Testes da Página de Login
   - Testes da Página de Denúncia
8. [Possíveis Melhorias Futuras](#-possíveis-melhorias-futuras)

---

# 🔥 Sobre o Projeto

O **Fire Alert** é um sistema fictício desenvolvido para fins educacionais. Suas funcionalidades principais incluem:

- Permitir que usuários realizem **login**
- Permitir **denúncias de incêndio** com endereço, descrição e imagem
- Garantir **responsividade**, **clareza visual** e **boa usabilidade**

Os testes automatizados validados garantem o funcionamento correto da interface e das regras de negócio.

---

# 🧪 Tecnologias Utilizadas

- **Cypress** — Testes E2E
- **Node.js** — Ambiente de execução
- **JavaScript** — Linguagem principal

---

# 📦 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js LTS**
- **npm**

Verifique:

```bash
node -v
npm -v
```

# ⚙ Instalação

No diretório do projeto:
```
npm install
npm install cypress --save-dev
```

# ▶ Executando os Testes
Modo interativo (recomendado)
```
npx cypress open
```
Selecione E2E Testing e escolha o navegador.

# Modo headless (terminal)

```
npx cypress run
```

# 📂 Estrutura do Projeto

Abaixo está a estrutura do repositório apresentada corretamente no GitHub:
```
📁 PROJETO-FIRE-ALERT
│
├── cypress
│   ├── e2e
│   │   ├── login.cy.js         # Testes da Tela de Login
│   │   └── denuncia.cy.js      # Testes do Formulário de Denúncia
│   └── support                 # Arquivos de suporte do Cypress
│
├── js                          # Scripts auxiliares
├── login.html                  # Página de Login
├── denuncia.html               # Página de Denúncia
├── auth.js                     # Lógica de autenticação
├── scriptdenuncia.js           # Preview e envio de imagem
├── style.css                   # Estilos do Login
├── styledenuncia.css           # Estilos da Denúncia
├── cypress.config.js           # Configuração do Cypress
├── package.json                # Dependências
└── README.md                   # Documentação do projeto
```

# 🧪 Testes Implementados

A seguir está a documentação completa dos testes por página e grupos.
