const BasePage = require('./BasePage');

class SwipePage extends BasePage {

    // ========= Menus =========

    get menuSwipe() {
        return $('~Swipe');
    }

   get textoMenuSwipe() {
        return $('//android.widget.TextView[@text="Swipe horizontal"]');
    }

    get primeiroItemCarrossel() {
        return $('//android.widget.TextView[@text="FULLY OPEN SOURCE"]');
    }

    get segundoItemCarrossel() {
        return $('//android.widget.TextView[@text="GREAT COMMUNITY"]');
    }

    get textoVoceMeEncontrou() {
        return $('//android.widget.TextView[@text="You found me!!!"]');
    }

    async acessarSwipe() {
        await this.menuSwipe.click();
    }

    async swipeCarrossel() {
        await this.swipeHorizontal();
    }

    async swipeVertical(porcentagemTela) {
        await this.scrollVertical(porcentagemTela);
    }

}

module.exports = new SwipePage();