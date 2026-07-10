const HomePage = require('../../../src/pages/HomePage');
const FormsPage = require('../../../src/pages/FormsPage');
const dados = require('../../../data/forms.json');

describe('Forms', () => {

    it('Deve preencher o campo de texto', async () => {

        await HomePage.acessarFormularios();

        await FormsPage.preencherCampo(
            FormsPage.input,
            dados.forms.field.texto
        );

        await expect(FormsPage.input)
            .toHaveText(dados.forms.field.texto);

    });

});