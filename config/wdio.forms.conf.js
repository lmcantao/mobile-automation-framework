const { config } = require('./wdio.android.conf');

exports.config = {
    ...config,

    specs: [
        '../tests/specs/forms/*.spec.js'
    ]
};