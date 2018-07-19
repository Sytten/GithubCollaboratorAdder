'use strict';

const Router = require('koa-router');
const axios = require("axios");
const format = require('string-format');
const config = require.main.require("./config");

const router = module.exports = new Router();

router.post('/collaborators/add', async function (ctx) {
  const user = process.env.USER;
  const repo = process.env.REPO;
  const token = process.env.TOKEN;
  const collaborator = ctx.request.body.username;

  if(!collaborator) {
    ctx.response.status = 400;
    return;
  }

  const url = format(config.github.collaborators, user, repo, collaborator);

  await axios.put(url, {}, {
    auth: {
      username: user,
      password: token
    }
  }).then(function(response) {
    ctx.response.status = 200;
  }).catch(function (error) {
    ctx.response.status = 400;
  });
});