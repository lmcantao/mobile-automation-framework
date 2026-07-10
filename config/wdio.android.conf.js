// Importa a configuração base compartilhada entre os ambientes.
const { config } = require('./wdio.shared.conf')

// Carrega as capacidades específicas para execução no Android.
const { androidCapabilities } = require('./capabilities/android.capabilities')

// Ativa o serviço Appium para iniciar o servidor automaticamente durante a execução.
const { appiumService } = require('./services/appium.service')

// Define o reporter de evidências para gerar relatórios mais claros e rastreáveis.
const { allureReporter } = require('./reporters/allure.reporter')

// Configuração específica para execução de testes mobile no Android.
exports.config = {
    // Herdando as definições base do ambiente compartilhado.
    ...config,

    specs: [
        '../tests/specs/**/*.spec.js'
    ],

    // Define quais capacidades serão usadas pela sessão do WebdriverIO.
    capabilities: [
        androidCapabilities
    ],

    // Serviços que devem ser iniciados antes da execução dos cenários.
    services: [
        appiumService
    ],

    // Reporters utilizados para exibir logs no console e gerar evidências detalhadas.
    reporters: [
        'spec',
        allureReporter
    ]
}