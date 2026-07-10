const HomePage = require('../../../src/pages/HomePage');
const DragPage = require('../../../src/pages/DragPage');

describe('Tela de Drag', () => {

    it('Deve acessar a tela de drag', async () => {

        await HomePage.acessarDrag();

        await expect(DragPage.textoMenuDrag).toHaveText('Drag and Drop');

    });

});