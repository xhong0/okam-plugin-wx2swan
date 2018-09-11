/**
 * @file build script
 * @author xxx
 */

'use strict';

const build = require('okam-build');
build.run('swan', require('./swan.config'));
