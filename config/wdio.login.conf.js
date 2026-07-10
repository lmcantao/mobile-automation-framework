const { config } = require('./wdio.android.conf');

exports.config = {
    ...config,

    specs: [
        '../tests/specs/login/*.spec.js'
    ]
};