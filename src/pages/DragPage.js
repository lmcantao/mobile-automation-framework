const BasePage = require('./BasePage');

class DragPage extends BasePage {

    // ========= Menus =========

    get menuDrag() {
        return $('~Drag');
    }

   get textoMenuDrag() {
        return $('//android.widget.TextView[@text="Drag and Drop"]');
    }

    async acessarDrag() {
        await this.clicar(this.menuDrag);
    }

}

module.exports = new DragPage();