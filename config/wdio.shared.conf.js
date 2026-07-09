// Configuração base compartilhada para a suíte de testes mobile.
// Aqui ficam os parâmetros essenciais que devem ser reutilizados por todos os ambientes.
exports.config = {
    // Execução local, ideal para desenvolvimento e validação inicial dos cenários.
    runner: 'local',

    hostname: '127.0.0.1',

    port: 4723,

    path: '/',

    // Ponto de entrada dos testes. Todos os arquivos de spec devem ficar sob esta pasta.
    specs: [
        './tests/specs/**/*.spec.js'
    ],

    // Limita a execução a uma instância por vez para reduzir ruído e facilitar a análise de falhas.
    maxInstances: 1,

    // Nível de log utilizado para acompanhar a execução com clareza sem excessos.
    logLevel: 'trace',

    // Framework de testes adotado para estruturar cenários em BDD.
    framework: 'mocha',

    // Opções específicas do Mocha para manter a leitura e o comportamento dos testes consistentes.
    mochaOpts: {
        // Interface BDD, mais legível para cenários de aceitação e automação.
        ui: 'bdd',

        // Timeout padrão para cada teste, evitando travamentos silenciosos.
        timeout: 60000
    },

     beforeSession: function (config, capabilities) {
        console.log('\n========== CAPABILITIES ==========')
        console.dir(capabilities, { depth: null })
        console.log('==================================\n')
    }
}