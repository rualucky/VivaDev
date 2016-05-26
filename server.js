var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var path = require('path')
var express = require('express')

var app = new (require('express'))()
var port = 1902

//var category = require('./routes/category')

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


// app.get("/", function(req, res) {
//   res.sendFile(__dirname + '/index.html')
// })

//server static assets normally
app.use(express.static(__dirname + '/public'))
//handle every other route with index.html, which will contain
//a script tag to your application's JavaScript file(s)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/index.html'))
})

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'js');
// app.engine('js', require('express-react-views').createEngine());

// app.use('/category', category);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
