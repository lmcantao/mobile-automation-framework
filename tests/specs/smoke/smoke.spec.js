const HomePage = require('../../../src/pages/HomePage');
const LoginPage = require('../../../src/pages/LoginPage');

describe('Tela inicial', () => {

    it('Deve abrir o aplicativo com sucesso', async () => {
        // Valida se o elemento mapeado na HomePage está visível na tela
        await expect(HomePage.menuHome).toBeDisplayed();

        await expect(HomePage.textoMenuHome).toHaveText('WEBDRIVER');
    });

    it('Deve exibir os itens do menu principal', async () => {
        // Valida se os botões do menu principal estão visíveis
        await expect(HomePage.menuHome).toBeDisplayed();

        await expect(HomePage.menuDrag).toBeDisplayed();

        await expect(HomePage.menuSwipe).toBeDisplayed();

        await expect(HomePage.menuFormularios).toBeDisplayed();

        await expect(HomePage.menuLogin).toBeDisplayed();

        await expect(HomePage.menuWeb).toBeDisplayed();

        await expect(HomePage.menu).toBeDisplayed();

    });

    it('Deve navegar para a tela de login', async () => {
        // Acesando a tela de login através do menu principal
        await LoginPage.acessarTela();

        await expect(LoginPage.tituloLogin).toHaveText('Login / Sign up Form');
    });

});
