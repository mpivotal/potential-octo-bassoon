var express = require( 'express')
var app = express()
var lessMiddleware = require('less-middleware');

app.set( 'views', __dirname + '/views')
app.set( 'view engine', 'jade')
app.use( lessMiddleware(__dirname + '/public'))
app.use( express.static( __dirname + '/public'))
app.locals.pretty = true

app.get ('/', function (req, res) {
  res.redirect('/org')
})
app.get ('/:var(org|apps|org/apps)', function (req, res) {
  res.redirect('/org/apps/running')
})
app.get( '/org/apps/running', function (req, res) {
  res.render( 'pages/orgs/apps/running', { })
})
app.get( '/org/apps/crashing', function (req, res) {
  res.render( 'pages/orgs/apps/crashing', { })
})
app.get( '/org/apps/total', function (req, res) {
  res.render( 'pages/orgs/apps/total', { })
})

app.listen( process.env.PORT || 4000)
