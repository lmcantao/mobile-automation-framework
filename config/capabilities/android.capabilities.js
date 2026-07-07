// Configurações de capacidades para execução em dispositivos Android.
// Essas opções são enviadas ao Appium para definir o comportamento do teste.
exports.androidCapabilities = {
    // Sistema operacional alvo da execução.
    platformName: 'Android',

    // Motor de automação usado pelo Appium.
    'appium:automationName': 'UiAutomator2',

    // Nome do dispositivo ou emulador que será utilizado.
    'appium:deviceName': 'Android Emulator',

    // Caminho do aplicativo que será instalado e testado.
    'appium:app': './apps/android/native-demo-app.apk',

    // Concede automaticamente as permissões necessárias durante a execução.
    'appium:autoGrantPermissions': true,

    // Tempo máximo de espera para novos comandos da sessão Appium.
    'appium:newCommandTimeout': 240
}