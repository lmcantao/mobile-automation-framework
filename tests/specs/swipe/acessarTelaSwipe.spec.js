const HomePage = require('../../../src/pages/HomePage');
const SwipePage = require('../../../src/pages/SwipePage');

describe('Tela de Swipe', () => {

    it('Deve acessar a tela de swipe', async () => {

        await HomePage.acessarSwipe();

        await expect(SwipePage.textoMenuSwipe).toHaveText('Swipe horizontal');

    });

});