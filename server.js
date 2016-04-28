var express = require( 'express')
var app = express()
var lessMiddleware = require('less-middleware');

app.set( 'views', __dirname + '/views')
app.set( 'view engine', 'jade')
app.use(lessMiddleware(__dirname + '/less', { dest: 'public/styles/' }));
app.use( express.static( __dirname + '/public'))
app.locals.pretty = true

app.get( '/', function ( req, res) {
  res.render( 'pages/org', { })
})

app.listen( process.env.PORT || 4000)
