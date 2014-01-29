var path    = require('path');
var winston = require('winston'); //configure the default application log
nconf = require('nconf'); // global

//load the global configuration file
nconf.file({
    file : path.join( __dirname, '../config', 'global.json' )
});

//add a log file output
winston.add(winston.transports.File, {
    filename: path.join( nconf.get('ApplicationLogging:Dir'), nconf.get('ApplicationLogging:File') ),
    maxsize: 1024 * 1024 * 10,
    level: nconf.get('ApplicationLogging:Level')
});
