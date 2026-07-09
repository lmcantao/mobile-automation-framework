const path = require('path');

exports.androidCapabilities = {
    platformName: 'Android',

    'appium:automationName': 'UiAutomator2',

    'appium:deviceName': 'Android Emulator',

    'appium:app': path.resolve(
        process.cwd(),
        'apps/android/native-demo-app.apk'
    ),

    'appium:autoGrantPermissions': true,

    'appium:newCommandTimeout': 240
}