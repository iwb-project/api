// iwb server

var defaults = require('./config/defaults');
var logger   = require('./config/logger');
var express  = require('express');
var app      = express();

// access log
app.use(function(req, res, next) {
    // access log
    logger.info('%s %s', req.method, req.url);
    next(); 
});

app.use('/status', require('./routes/status'));

app.get('/', function (req, res) {
  res.json({links: 
    {
      home: '/',
      status: '/status', 
      information: '/status/information', 
    }
});
});

var server = app.listen(process.env.PORT || defaults.http.port, function () {

  var host = server.address().address;
  var port = server.address().port;

  logger.info('%s is now listening at http://%s:%s', defaults.app.name, host, port);

});
