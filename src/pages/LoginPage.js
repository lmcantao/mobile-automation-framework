const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    // ========= Menus =========

    get menuLogin() {
        return $('~Login');
    }

    get tituloLogin() {
        return $('//android.widget.TextView[@text="Login / Sign up Form"]');
    }

    // ========= Campos =========

    get campoEmail() {
        return $('~input-email');
    }

    get campoSenha() {
        return $('~input-password');
    }

    // ========= Botões =========

    get botaoEntrar() {
        return $('~button-LOGIN');
    }

    // ========= Mensagens =========

    get mensagemErroEmail() {
        // substituir pelo seletor real
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    get mensagemErroSenha() {
        // substituir pelo seletor real
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

    // ========= Popup =========

    get textoMensagemRetorno() {
        return $('//android.widget.TextView[@resource-id="com.wdiodemoapp:id/alert_title"]');
    }

    get botaoConfirmarMensagem() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    // ========= Métodos =========
    async acessarTela() {
        await this.clicar(this.menuLogin);
    }

    async realizarLogin(email, senha) {

        await this.escrever(this.campoEmail, email);

        await this.escrever(this.campoSenha, senha);

        await this.ocultarTeclado();

        await this.clicar(this.botaoEntrar);
    }

    async fecharMensagemRetorno() {
        await this.clicar(this.botaoConfirmarMensagem);
    }

}

module.exports = new LoginPage();