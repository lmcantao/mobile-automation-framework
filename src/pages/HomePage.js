const BasePage = require('./BasePage');

class HomePage extends BasePage {

    get menuHome() {
        return $('~Home');
    }

    get menuWebview() {
        return $('~Webview');
    }

    get menuLogin() {
        return $('~Login');
    }

    get menuFormularios() {
        return $('~Forms');
    }

    get menuSwipe() {
        return $('~Swipe');
    }

    get menuDrag() {
        return $('~Drag');
    }

    async acessarHome() {
        await this.clicar(this.menuHome);
    }

    async acessarLogin() {
        await this.clicar(this.menuLogin);
    }

    async acessarFormularios() {
        await this.clicar(this.menuFormularios);
    }

    async acessarSwipe() {
        await this.clicar(this.menuSwipe);
    }

    async acessarDrag() {
        await this.clicar(this.menuDrag);
    }

    async acessarWebview() {
        await this.clicar(this.menuWebview);
    }
}

module.exports = new HomePage();