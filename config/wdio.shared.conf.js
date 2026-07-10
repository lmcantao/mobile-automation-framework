const allureReporter = require('@wdio/allure-reporter').default;

// Configuração base compartilhada para a suíte de testes mobile.
// Aqui ficam os parâmetros essenciais que devem ser reutilizados por todos os ambientes.
exports.config = {

    // Execução local, ideal para desenvolvimento e validação inicial dos cenários.
    runner: 'local',

    hostname: '127.0.0.1',

    port: 4723,

    path: '/',

    // Limita a execução a uma instância por vez para reduzir ruído e facilitar a análise de falhas.
    maxInstances: 1,

    // Nível de log utilizado para acompanhar a execução com clareza sem excessos.
    logLevel: 'trace',

    // Framework de testes adotado para estruturar cenários em BDD.
    framework: 'mocha',

    // Opções específicas do Mocha para manter a leitura e o comportamento dos testes consistentes.
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Relatórios da execução.
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],

    beforeSession: function (config, capabilities) {
        console.log('\n========== CAPABILITIES ==========');
        console.dir(capabilities, { depth: null });
        console.log('==================================\n');
    },

    afterTest: async function (test, context, { error, passed }) {

        if (!passed) {

            const screenshot = await browser.takeScreenshot();

            allureReporter.addAttachment(
                'Screenshot da falha',
                Buffer.from(screenshot, 'base64'),
                'image/png'
            );

            if (error) {
                allureReporter.addAttachment(
                    'Detalhes do erro',
                    error.message,
                    'text/plain'
                );
            }
        }
    }
};