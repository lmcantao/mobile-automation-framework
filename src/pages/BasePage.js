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

    async scrollVertical(porcetagemTela = 0.8) {
        const { width, height } = await browser.getWindowSize();

        // Define um ponto inicial seguro bem no centro horizontal da tela
        const startX = Math.floor(width / 2);
        
        const startY = Math.floor(height * porcetagemTela); // 80% da altura da tela para baixo
        const endY = Math.floor(height * 0.1); // 10% da altura da tela para cima

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

    async swipeHorizontal(direcao = 'esquerda', percentualAltura = 0.8) {
        const { width, height } = await browser.getWindowSize();

        const posicaoY = Math.floor(height * percentualAltura);

        const inicioX = direcao === 'esquerda'
            ? Math.floor(width * 0.8)
            : Math.floor(width * 0.2);

        const fimX = direcao === 'esquerda'
            ? Math.floor(width * 0.2)
            : Math.floor(width * 0.8);

        await browser.performActions([
            {
                type: 'pointer',
                id: 'dedo1',
                parameters: {
                    pointerType: 'touch'
                },
                actions: [
                    {
                        type: 'pointerMove',
                        duration: 0,
                        x: inicioX,
                        y: posicaoY
                    },
                    {
                        type: 'pointerDown',
                        button: 0
                    },
                    {
                        type: 'pause',
                        duration: 300
                    },
                    {
                        type: 'pointerMove',
                        duration: 800,
                        x: fimX,
                        y: posicaoY
                    },
                    {
                        type: 'pointerUp',
                        button: 0
                    }
                ]
            }
        ]);

        await browser.releaseActions();
    }


}

module.exports = BasePage;