class BasePage {

    async clicar(elemento) {
        await elemento.waitForDisplayed();
        await elemento.click();
    }

    async escrever(elemento, texto) {
        await elemento.waitForDisplayed();
        await elemento.setValue(texto);
    }

    async obterTexto(elemento) {
        await elemento.waitForDisplayed();
        return await elemento.getText();
    }

    async ocultarTeclado() {
        try {
            await driver.hideKeyboard();
        } catch (erro) {
            // O teclado pode não estar visível.
        }
    }

    async esperarElemento(elemento) {
        await elemento.waitForDisplayed();
    }

}

module.exports = BasePage;