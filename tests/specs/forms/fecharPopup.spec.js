const HomePage = require('../../../src/pages/HomePage');
const FormsPage = require('../../../src/pages/FormsPage');

describe('Forms', () => {

    it('Deve fechar o popup ao clicar no botão OK', async () => {

        await HomePage.acessarFormularios();

        await FormsPage.clicarActive();

        await expect(FormsPage.mensagemPopup)
            .toBeDisplayed('This button is active');

        await FormsPage.fecharPopup();

        await expect(FormsPage.mensagemPopup)
            .not.toBeDisplayed('This button is active');

    });

});