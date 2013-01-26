var express = require('express')
  , http = require('http')
  , path = require('path')

var app = express()

app.configure(function(){
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.locals.pretty = true

  app.use(express.static(path.join(__dirname, 'public')))
})

app.get('/', function(req, res) {
    res.render('index')
})

http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port 3000")
})
