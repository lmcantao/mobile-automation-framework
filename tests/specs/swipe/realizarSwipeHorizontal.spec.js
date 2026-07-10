const HomePage = require('../../../src/pages/HomePage');
const SwipePage = require('../../../src/pages/SwipePage');

describe('Swipe horizontal', () => {

    it('Deve fazer swipe horizontal no carrossel', async () => {

        await HomePage.acessarSwipe();

        await expect(SwipePage.textoMenuSwipe).toHaveText('Swipe horizontal');

        await expect(SwipePage.primeiroItemCarrossel).toHaveText('FULLY OPEN SOURCE');

        await SwipePage.swipeCarrossel();

        await expect(SwipePage.segundoItemCarrossel).toHaveText('GREAT COMMUNITY');

    });

});