const HomePage = require('../../../src/pages/HomePage');
const LoginPage = require('../../../src/pages/LoginPage');
const usuarios = require('../../../data/usuarios.json');

describe('Login', () => {

    it('Deve exibir mensagem ao informar e-mail inválido', async () => {

        await HomePage.acessarLogin();

        await LoginPage.realizarLogin(
            usuarios.senhaInvalida.email,
            usuarios.senhaInvalida.senha
        );

        expect(await LoginPage.mensagemErroSenha.getText())
            .toEqual('Please enter at least 8 characters');

    });

});