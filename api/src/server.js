var koa = require('koa'),
  bodyParser = require('koa-bodyparser'),
  jwt = require('koa-jwt'),
  cors = require('kcors'),
  json = require('koa-json'),
  mongoose = require('mongoose'),
  router = require('./router')

var app = koa()
var secret = process.env.API_AUTH_SECRET;

app.use(cors())
app.use(json())
app.use(bodyParser())
app.use(jwt({ secret: secret }))
app.use(router.routes())

mongoose.connect('mongodb://db/dbname')
  .then(() => console.log('DB conenction up.'))
  .then(app.listen(3000))
