const { request } = require('undici');

(async () => {
    try {
        const { body } = await request('http://127.0.0.1:4723/session', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                capabilities: {
                    alwaysMatch: {
                        platformName: 'Android',
                        'appium:automationName': 'UiAutomator2',
                        'appium:deviceName': 'Android Emulator',
                        'appium:app': 'C:\\git_law\\mobile-automation-framework\\apps\\android\\native-demo-app.apk'
                    },
                    firstMatch: [{}]
                }
            })
        });

        console.log(await body.json());
    } catch (err) {
        console.error(err);
    }
})();