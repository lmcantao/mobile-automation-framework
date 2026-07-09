const HomePage = require('../../../src/pages/HomePage');

describe('Tela inicial', () => {

    it('Deve abrir o aplicativo com sucesso', async () => {

        await expect(HomePage.menuHome).toBeDisplayed();

    });

});