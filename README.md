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

# 🔐 Testes da Página de Login (login.cy.js)

Os testes foram divididos em 3 grupos:

## GRUPO 1 — Testes Visuais e de Interface (UI)
```
✔ Logo

Verifica se está visível

Confere se o src é válido

Verifica o atributo alt="Fire Alert Logo"


✔ Título e Estilo

Deve conter FIRE ALERT

Deve possuir classe text-danger

Cor validada via CSS → rgb(220, 53, 69)


✔ Subtítulo

Deve conter “Bem-vindo de volta”


✔ Campos

Email → placeholder “Digite seu e-mail”

Senha → placeholder “Digite sua senha”

Campo senha deve ser type=password

Ambos devem possuir required


✔ Botão

Deve ter classes btn-danger e w-100

Cor validada via CSS
```

## GRUPO 2 — Testes de Funcionalidade (Lógica)
```
✔ Login bem-sucedido

Preenche credenciais válidas

Valida o alerta “Login realizado com sucesso!”

Redireciona para index.html


✔ Senha incorreta

Exibe alerta “E-mail ou senha incorretos!”


✔ Email inexistente

Também exibe alerta “E-mail ou senha incorretos!”


✔ Campos vazios

Navegador bloqueia envio (HTML5)

Página não deve mudar

Não deve exibir alerta de sucesso
```
## Gurpo 3 - Responsividade (Mobile)
Este teste garante que a tela de login se adapte corretamente a dispositivos móveis.
```
TESTE ÚNICO — Adaptação Mobile (iPhone X)

✔ Simulação de Dispositivo

Define o viewport para iPhone X (375px de largura)

Força o navegador a renderizar como mobile

✔ Ajuste de Espaçamento (Padding)

Verifica se o padding reduziu de 2rem para 1.5rem (24px)

Garante economia de espaço na tela pequena

✔ Largura Fluida
```

# 🚨 Testes da Página de Denúncia (denuncia.cy.js)

Os testes foram divididos em 3 grupos:

## GRUPO 1 — Testes Visuais e de Navegação
```
✔ Elementos principais

Logo visível

Título “FIRE ALERT”

Menu com 5 itens

Menu deve conter “Denúncia”

✔ Formulário

Título “Denúncia de Incêndio”

Placeholder do endereço

Placeholder da descrição

Botão de upload → “📷 Envie uma imagem”
```
## GRUPO 2 — Funcionalidades (Upload e Envio)
```
✔ Upload de imagem

Preview deve iniciar vazio

Uso de selectFile()

Verifica arquivo no input

Preview exibido no DOM

✔ Envio da denúncia

Preenche campos

Clica em enviar

Valida alerta: “Denúncia enviada com sucesso”

Campo endereço deve ser limpo
```
## GRUPO 3 — Responsividade (Mobile)
```
Simulação do dispositivo iPhone X:

.container deve usar flex-direction: column

header deve reorganizar para coluna

nav deve habilitar flex-wrap: wrap
```

