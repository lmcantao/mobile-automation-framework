const HomePage = require('../../../src/pages/HomePage');
const LoginPage = require('../../../src/pages/LoginPage');

describe('Tela de Login', () => {

    it('Deve acessar a tela de login', async () => {

        await HomePage.acessarLogin();

        await expect(LoginPage.tituloLogin).toHaveText('Login / Sign up Form');

    });

});