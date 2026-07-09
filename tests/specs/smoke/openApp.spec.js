// Cenário de smoke para validar se o aplicativo foi aberto com sucesso.
describe('Open App', () => {

    // Teste básico que garante que a app inicializa corretamente.
    it('should launch the application', async () => {

        // Pausa intencional para permitir que a interface carregue antes da próxima validação.
        await driver.pause(5000)

    })

})