const HomePage = require('../../../src/pages/HomePage');
const FormsPage = require('../../../src/pages/FormsPage');
const dados = require('../../../data/forms.json');

describe('Forms', () => {

    it('Deve selecionar uma opção no dropdown', async () => {

        await HomePage.acessarFormularios();

        await FormsPage.clicarDropdown();

        await FormsPage.clicarOpcaoDropdown();

        await expect(FormsPage.seletorETextoDropdown)
            .toHaveText(dados.forms.dropdown.opcao);

    });

});