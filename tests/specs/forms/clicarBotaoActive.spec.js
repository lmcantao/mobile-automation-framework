const HomePage = require('../../../src/pages/HomePage');
const FormsPage = require('../../../src/pages/FormsPage');

describe('Forms', () => {

    it('Deve exibir popup ao clicar no botão Active', async () => {

        await HomePage.acessarFormularios();

        await FormsPage.clicarActive();

        await expect(FormsPage.mensagemPopup)
            .toBeDisplayed('This button is active');

    });

});