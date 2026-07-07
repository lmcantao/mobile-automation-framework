// Configuração do reporter Allure para gerar evidências estruturadas dos testes.
// Esse setup é essencial para manter um histórico claro de execução, falhas e contexto de cada cenário.
exports.allureReporter = [
    // Nome do reporter utilizado pelo WebdriverIO.
    'allure',
    {
        // Diretório onde os resultados do Allure serão armazenados.
        outputDir: './reports/allure-results',

        // Evita registrar passos internos do WebdriverIO, mantendo o relatório mais limpo e focado no cenário de teste.
        disableWebdriverStepsReporting: true,

        // Mantém a captura de screenshots para facilitar a análise de defeitos e a validação visual das falhas.
        disableWebdriverScreenshotsReporting: false
    }
]