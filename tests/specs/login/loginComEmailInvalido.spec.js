const HomePage = require('../../../src/pages/HomePage');
const LoginPage = require('../../../src/pages/LoginPage');
const usuarios = require('../../../data/usuarios.json');

describe('Login', () => {

    it('Deve exibir mensagem ao informar e-mail inválido', async () => {

        await HomePage.acessarLogin();

        await LoginPage.realizarLogin(
            usuarios.usuarioInvalido.email,
            usuarios.usuarioInvalido.senha
        );

        expect(await LoginPage.mensagemErroEmail.getText())
            .toEqual('Please enter a valid email address');

    });

});