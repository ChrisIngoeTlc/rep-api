var path    = require('path');
var restify = require('restify');
var server = restify.createServer();
var bunyan  = require('bunyan'); //server call logging (request/response)
nconf = require('nconf'); // global
var logging = require('./middleware/logging'); //setup application level logging

//load the global configuration file
nconf.file({
  file : path.join( __dirname, 'config', 'global.json' )
});

//server logs
var Logger = bunyan.createLogger({
  name    : nconf.get('ServerLogging:Name'),
  streams : [{
    path  : path.join( nconf.get('ServerLogging:Dir'), nconf.get('ServerLogging:File') )
  }]
});

//Request / Response Logging
server.on('after', restify.auditLogger({
  log : Logger
}));

//Server routes
var middlewareList = ['root'].map(function ( middlewareName ) {
    var middleware = require(path.join(__dirname, 'middleware', middlewareName));
    return middleware.setup( server );
});


//Run the server
server.listen(nconf.get('Server:Port'), function () {
    console.log('%s listening at %s', server.name, server.url);
});
