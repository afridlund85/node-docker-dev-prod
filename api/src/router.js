var router = require('koa-router')()

router.post('/', function *(){
  this.body = 'hi'
})

module.exports = router
