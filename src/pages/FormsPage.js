const BasePage = require('./BasePage');

class FormsPage extends BasePage {

    // ========= Menus =========
    get menuForms() {
      return $('~Forms');
    }

    get textoMenuForms() {
      return $('//android.widget.TextView[@text="Form components"]');
    }

    // ========= Campos =========
    get textoInput() {
      return $('//android.widget.TextView[@text="Input field:"]')
    }

    get input() {
      return $('~text-input');
    }

    get textoTextResult() {
      return $('//android.widget.TextView[@text="You have typed:"]')
    }

    get textResult() {
      return $('~input-text-result');
    }

    get textoSwitch() {
      return $('~//android.widget.TextView[@content-desc="switch-text"]');
    }

    get switch() {
      return $('~switch');
    }

    get textoSwitchResult() {
      return $('~switch-text');
    }

    get textoDropdown() {
      return $('//android.widget.TextView[@text="Dropdown:"]');
    }

    get seletorETextoDropdown() {
      return $('//android.widget.EditText[@resource-id="text_input"]');
    }

    get opcaoDropdown() {
      return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]');
    }

    // ========= Botões =========
    get botaoActive() {
      return $('~button-Active');
    }

    get botaoInactive() {
      return $('~button-Inactive');
    }

    // ========= Popups =========
    get tituloPopup() {
      return $('//android.widget.FrameLayout[@resource-id="com.wdiodemoapp:id/contentPanel"]');
    }

    get mensagemPopup() {
      return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    get botaoOk() {
      return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    // ========= Métodos =========
    async acessarForms() {
      await this.clicar(this.menuLogin);
    }

    async preencherCampo(elemento,texto) {
      await this.clicar(elemento);
      await this.escrever(this.input, texto);
    }

    async alterarSwitch() {
      await this.clicar(this.switch);
    }

    async selecionarOpcao(opcao) {
      await this.clicar(this.dropdown);
      await this.clicar(opcao);
    }     

    async clicarActive() {
      await this.scrollVertical();
      await this.clicar(this.botaoActive);
    }

    async clicarDropdown() {
      await this.scrollVertical();
      await this.clicar(this.dropdown);
    }

    async clicarOpcaoDropdown() {
      await this.clicar(this.opcaoDropdown);
    }

    async fecharPopup() {
      await this.clicar(this.botaoOk);
    }

}

module.exports = new FormsPage();