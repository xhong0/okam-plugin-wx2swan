/**
 * @file wx js to swan js
 * @author xiaohong8023@outlook.com
 */


'use strict';

const wxscript = require('./lib/wxscript');
const wxtpl = require('./lib/wxtpl');

module.exports = function (file, options) {
    if (file.extname === 'wxss') {
        file.rext = 'css';
        return {
            content: file.content
        };
    }

    if (file.extname === 'wxml') {
        file.rext = 'swan';
        return wxtpl(file, options);
    }

    if (file.extname === 'js') {
        return wxscript(file, options);
    }
};
