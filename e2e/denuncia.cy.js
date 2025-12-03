describe('Testes da Página de Denúncia - Fire Alert', () => {

    beforeEach(() => {
        cy.visit('denuncia.html');
    });

    // GRUPO 1: TESTES VISUAIS E DE NAVEGAÇÃO (INTERFACE)
    it('Deve exibir os elementos principais: Logo, Menu e Títulos', () => {
        // Valida o Cabeçalho (Logo e Título)
        cy.get('.logo img').should('be.visible');
        cy.get('.logo h1').should('contain', 'FIRE ALERT');

        // Valida o Menu de Navegação
        // Verifica se existem 5 links e se o link "Denúncia" está lá
        cy.get('nav a').should('have.length', 5);
        cy.get('nav').should('contain', 'Denúncia');

        // Valida o Título do Formulário
        cy.get('h2').should('contain', 'Denúncia de Incêndio');
    });

    it('Os campos devem ter os labels e textos de ajuda corretos', () => {
        // Valida se os campos têm os textos explicativos (Placeholders)
        cy.get('#endereco').should('have.attr', 'placeholder', 'Informe o local exato ou mais próximo');
        cy.get('#descricao').should('have.attr', 'placeholder', 'Explique o que aconteceu...');
        
        // Valida o texto do botão de upload
        cy.get('label[for="imagem"]').should('contain', '📷 Envie uma imagem');
    });


    // GRUPO 2: FUNCIONALIDADES CRUCIAIS (UPLOAD E ENVIO)
    it('Deve permitir anexar uma foto e visualizar o PREVIEW', () => {
        // Verifica que a área de preview começa vazia
        cy.get('#preview').should('be.empty');

        // Simula o usuário escolhendo uma foto do computador
        // (O Cypress cria uma imagem falsa na memória para teste)
        cy.get('#imagem').selectFile({
            contents: Cypress.Buffer.from('conteudo-da-imagem'),
            fileName: 'foto-incendio.png',
            mimeType: 'image/png',
        });

        // Validação Crucial:
        // Verifica se o HTML recebeu o arquivo
        cy.get('#imagem').should('have.prop', 'files').and('have.length', 1);

        // Verifica se a imagem apareceu na tela (Preview visual)
        cy.get('#preview img').should('be.visible');
    });

    it('Deve preencher o formulário completo e enviar com sucesso', () => {
        // Monitora o alerta do navegador
        cy.on('window:alert', (texto) => {
            expect(texto).to.contain('Denúncia enviada com sucesso');
        });

        // Preenche Endereço
        cy.get('#endereco').type('Rodovia BR-101, KM 50');

        // Preenche Descrição (Textarea)
        cy.get('#descricao').type('Fumaça preta avistada atrás do posto de gasolina.');

        // Clica em Enviar
        cy.get('button[type="submit"]').click();

        // Verifica se o formulário foi limpo após o envio (Comportamento esperado)
        cy.get('#endereco').should('have.value', '');
    });


    // GRUPO 3: TESTES DE RESPONSIVIDADE (MOBILE)
    it('Deve ativar as regras de CSS para Mobile (Layout em Coluna)', () => {
        // Simula um iPhone
        cy.viewport('iphone-x');

        // Verifica se o container mudou a direção para 'column' (um embaixo do outro)
        // Se o media query não funcionar, isso aqui vai ser 'row' e o teste avisa!
        cy.get('.container').should('have.css', 'flex-direction', 'column');

        // Verifica se o Header também empilhou o logo e o menu
        cy.get('header').should('have.css', 'flex-direction', 'column');

        // Verifica se o menu permite quebra de linha (wrap) para caber na tela
        cy.get('nav').should('have.css', 'flex-wrap', 'wrap');
    });

});