/**
 * @file Build swan smart program config
 * @author xxx
 */

'use strict';

const path = require('path');
const wx2swanProcessor = require('../../../');

module.exports = {
    verbose: false,
    root: path.join(__dirname, '..'),
    output: {
        dir: 'dist',
        depDir: 'src/common'
    },
    component: {
        extname: 'vue'
    },
    framework: [],
    polyfill: [],
    processors: {
        babel: {
            extnames: ['js']
        },

        wx2swan: {
            processor: wx2swanProcessor,
            extnames: ['wxml', 'wxss']
        }
    },
    rules: [
        {
            match(file) {
                return file.isNpmWxCompScript;
            },
            processors: ['wx2swan']
        }
    ]
};
