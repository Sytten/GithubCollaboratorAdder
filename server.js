'use strict';

require('dotenv').config()

if (!process.env.SECRET) {
  throw new Error('You need an .env file. Go read the readme');
}

const Koa = require('koa');
const app = new Koa();

// Common middlewares
app.use(require('koa-logger')());
app.use(require('koa-helmet')());

app.keys = [process.env.SECRET];
app.use(require('koa-bodyparser')());

app.use(require('koa-views')(`${__dirname}/src/views`, {
  extension: 'hbs',
  map: { hbs: 'handlebars' }
}));

const controllers = require('./src/controllers');
app.use(controllers.routes())
   .use(controllers.allowedMethods());

const serve = require('koa-static');
const mount = require("koa-mount");
app.use(mount("/public", serve("./public")));

app.listen(process.env.PORT || 3000);
