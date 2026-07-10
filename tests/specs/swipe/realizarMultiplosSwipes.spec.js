const HomePage = require('../../../src/pages/HomePage');
const SwipePage = require('../../../src/pages/SwipePage');

describe('Swipe vertical', () => {

    it('Deve fazer swipe vertical na página', async () => {

        await HomePage.acessarSwipe();

        await expect(SwipePage.textoMenuSwipe).toHaveText('Swipe horizontal');

        await SwipePage.swipeVertical(0.5);
        await SwipePage.swipeVertical(0.88);
        await SwipePage.swipeVertical(0.88);

        await expect(SwipePage.textoVoceMeEncontrou).toHaveText('You found me!!!');

    });

});