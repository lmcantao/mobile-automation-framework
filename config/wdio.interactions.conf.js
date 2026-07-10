const { config } = require('./wdio.android.conf');

exports.config = {
    ...config,

    specs: [
        '../tests/specs/interactions/*.spec.js'
    ]
};