// Configuração do serviço Appium para a execução dos testes mobile.
// O WebdriverIO usará esse serviço para iniciar o Appium automaticamente.
exports.appiumService = [
    // Nome do serviço registrado no WebdriverIO.
    'appium',
    {
        // Comando executado para iniciar o Appium.
        command: 'appium'
    }
]