const HomePage = require('../../../src/pages/HomePage');
const FormsPage = require('../../../src/pages/FormsPage');
const dados = require('../../../data/forms.json');

describe('Forms', () => {

    it('Deve altera o switch', async () => {

        await HomePage.acessarFormularios();

        await FormsPage.alterarSwitch();

        await expect(FormsPage.textoSwitchResult)
            .toHaveText('Click to turn the switch OFF');
        
        await FormsPage.alterarSwitch();

        await expect(FormsPage.textoSwitchResult)
            .toHaveText('Click to turn the switch ON');

    });

});