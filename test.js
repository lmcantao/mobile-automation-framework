const { remote } = require('webdriverio');

(async () => {
    try {
        const driver = await remote({
            hostname: '127.0.0.1',
            port: 4723,
            path: '/',
            capabilities: {
                platformName: 'Android',
                'appium:automationName': 'UiAutomator2',
                'appium:deviceName': 'Android Emulator',
                'appium:app': 'C:\\git_law\\mobile-automation-framework\\apps\\android\\native-demo-app.apk',
                'appium:autoGrantPermissions': true
            }
        });

        console.log('✅ Sessão criada!');
        await driver.deleteSession();
    } catch (err) {
        console.error('❌ Erro ao criar sessão:');
        console.error(err);
    }
})();