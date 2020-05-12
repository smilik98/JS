const Koa = require('koa');
const serve = require('koa-static');
const KoaNunjucks = require('koa-nunjucks-2');
const bodyParser = require('koa-bodyparser');
const nunjucksDate = require('nunjucks-date');
const path = require('path');

const router = require('./router');

const app = new Koa();

nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');
const koaNunjucks = KoaNunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  configureEnvironment: (env) => {
    env.addFilter('date', nunjucksDate);
  },
});

app.use(bodyParser());
app.use(serve('.'));
app.use(koaNunjucks);
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(5000, () => console.log('Server listen on :5000'));
