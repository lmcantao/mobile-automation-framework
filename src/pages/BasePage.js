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

    async scrollVertical() {
        const { width, height } = await browser.getWindowSize();

        // Define um ponto inicial seguro bem no centro horizontal da tela
        const startX = Math.floor(width / 2);
        // Para rolar para BAIXO (ver mais conteúdo), começamos embaixo e subimos (direction: 'up')
        const startY = Math.floor(height * 0.8); 
        const endY = Math.floor(height * 0.2);

        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 600, x: startX, y: endY }, // duração menor para o scroll engajar
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        
        // Pequena pausa para a tela parar de mexer após o gesto
        await browser.pause(1000);
    }


}

module.exports = BasePage;