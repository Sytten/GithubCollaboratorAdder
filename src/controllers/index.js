'use strict';

const Router = require('koa-router');

const router = module.exports = new Router();

const home = require('./home.js');
router.use('/', home.routes(), home.allowedMethods());

const github = require('./github.js');
router.use('/github', github.routes(), github.allowedMethods());