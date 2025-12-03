describe('Testes Completos de Login - Fire Alert', () => {

    beforeEach(() => {
        cy.visit('login.html');
    });

    // --- GRUPO 1: TESTES VISUAIS E DE INTERFACE (UI) ---
    
    it('Deve exibir os elementos visuais corretamente (Logo, Título e Textos)', () => {
        // 1. Valida o Logo
        cy.get('img.logo')
            .should('be.visible')
            .and('have.attr', 'src') // Verifica se tem imagem
            .and('include', 'Fire-Emoji'); // Verifica se é a imagem do fogo
        
        cy.get('img.logo')
            .should('have.attr', 'alt', 'Fire Alert Logo'); // Valida acessibilidade

        // 2. Valida o Título
        cy.get('h4')
            .should('contain', 'FIRE ALERT')
            .and('have.class', 'text-danger'); // Classe do Bootstrap para vermelho

        // 3. Valida a cor do texto do título (Vermelho Real)
        // O código RGB(220, 53, 69) é o vermelho do 'text-danger'
        cy.get('h4').should('have.css', 'color', 'rgb(220, 53, 69)');

        // 4. Valida subtítulo
        cy.get('p.text-muted').should('contain', 'Bem-vindo de volta');
    });

   it('Os campos devem ter os placeholders e atributos corretos', () => {
        // 1. Campo Email
        cy.get('#email')
            .should('be.visible')
            .and('have.attr', 'placeholder', 'Digite seu e-mail');
        
        // Verifica se é obrigatório (separado para não travar)
        cy.get('#email').should('have.attr', 'required');

        // 2. Campo Senha
        cy.get('#password')
            .should('be.visible')
            .and('have.attr', 'placeholder', 'Digite sua senha')
            .and('have.attr', 'type', 'password'); // Verifica segurança (bolinhas)

        // Verifica se é obrigatório (separado)
        cy.get('#password').should('have.attr', 'required');
    });

    it('O botão deve ser VERMELHO e ter a classe correta', () => {
        cy.get('button[type="submit"]')
            .should('be.visible')
            .and('have.class', 'btn-danger') // Classe do Bootstrap
            .and('have.class', 'w-100'); // Classe de largura total
        
        // Valida se a cor de fundo é realmente vermelha
        cy.get('button[type="submit"]')
            .should('have.css', 'background-color', 'rgb(220, 53, 69)');
    });


    // --- GRUPO 2: TESTES DE LÓGICA (FUNCIONALIDADE) ---

  
  // CAMINHO FELIZ (LOGIN FUNCIONANDO) 
    it('Deve realizar login com sucesso (Validando Alerta e Redirecionamento)', () => {
        // Prepara a validação do Alerta
        // O robô fica esperando: "Se aparecer um alerta, confira se o texto é esse:"
        cy.on('window:alert', (textoDoAlerta) => {
            expect(textoDoAlerta).to.equal('Login realizado com sucesso!');
        });

        // Preenche os dados
        cy.get('#email').type('admin@firealert.com');
        cy.get('#password').type('123456');
        cy.get('button[type="submit"]').click();

        // Verifica se foi para a página certa
        cy.url().should('include', 'index.html');
    });

    it('Deve exibir erro ao errar a senha', () => {
        cy.on('window:alert', (texto) => {
            expect(texto).to.equal('E-mail ou senha incorretos!');
        });

        cy.get('#email').type('admin@firealert.com');
        cy.get('#password').type('senhaerrada');
        cy.get('button[type="submit"]').click();
    });

    it('Deve exibir erro com E-mail não cadastrado', () => {
        // Monitora o alerta
        cy.on('window:alert', (texto) => {
            expect(texto).to.equal('E-mail ou senha incorretos!');
        });

        // Digita um email que não existe, mas uma senha qualquer
        cy.get('#email').type('usuario_fantasma@email.com');
        cy.get('#password').type('123456');
        cy.get('button[type="submit"]').click();
    }); 
    
    // --- TESTE DE CAMPOS VAZIOS (HTML5)
    it('Deve impedir o envio se os campos estiverem vazios', () => {
        // Clica no botão sem preencher nada
        cy.get('button[type="submit"]').click();

        // Verifica se o navegador bloqueou (Validando o atributo 'required')
        // Se o campo tem 'required', o navegador não deixa passar.
        cy.get('#email').should('have.attr', 'required');
        cy.get('#password').should('have.attr', 'required');

        // Garante que NÃO mudou de página (continua no login)
        cy.url().should('include', 'login.html');

        // (Opcional) Garante que o alerta de sucesso NÃO apareceu
        cy.on('window:alert', (texto) => {
             expect(texto).to.not.equal('Login realizado com sucesso!'); 
        });
    });

});