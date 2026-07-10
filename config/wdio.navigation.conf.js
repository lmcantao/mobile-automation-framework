const { config } = require('./wdio.android.conf');

exports.config = {
    ...config,

    specs: [
        '../tests/specs/navigation/*.spec.js'
    ]
};