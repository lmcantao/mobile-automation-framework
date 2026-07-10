const HomePage = require('../../../src/pages/HomePage');
const FormsPage = require('../../../src/pages/FormsPage');
const dados = require('../../../data/forms.json');

describe('Forms', () => {

    it('Deve acessar a tela de forms', async () => {

        await HomePage.acessarFormularios();

        await expect(FormsPage.textoMenuForms)
            .toHaveText('Form components');

    });

});