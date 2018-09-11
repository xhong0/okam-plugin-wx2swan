/**
 * @file wx js to swan js
 * @author xiaohong8023@outlook.com
 */


'use strict';

module.exports = function (file, options) {
    const wx2swan = require('wx2swan/src/api');
    const wxmp2swanApi = require('wx2swan/config/wxmp2swan/api');

    let content = wx2swan.transformApiContent(
        file.content.toString(),
        wxmp2swanApi,
        'wx',
        wxmp2swanApi.ctx,
        [],
        file.fullPath
    );

    return {content};
};
