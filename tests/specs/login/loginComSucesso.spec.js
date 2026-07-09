const HomePage = require('../../../src/pages/HomePage');
const LoginPage = require('../../../src/pages/LoginPage');

const usuarios = require('../../../data/usuarios.json');

describe('Login', () => {

    it('Deve realizar login com sucesso', async () => {

        await HomePage.acessarLogin();

        await LoginPage.realizarLogin(
            usuarios.usuarioValido.email,
            usuarios.usuarioValido.senha
        );

        await expect(LoginPage.textoMensagemRetorno)
            .toHaveText('Success');

        await LoginPage.fecharMensagemRetorno();

    });

});