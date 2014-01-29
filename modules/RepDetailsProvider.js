var path    = require('path');
var restify = require('restify');
var applog = require('winston');
var sqlHelper = require('../middleware/sqlhelper');
var jsonHelper = require('../middleware/sqltojsonconverter');

exports.RepDetailsV1 = RepDetailsV1;

function RepDetailsV1(req, res, next) {
    applog.debug('Getting rep details for @logon=' + req.params.logon);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:RepDetailsSp') + " @logon=" + req.params.logon,function(err,results){
       if(err){
           return next(new restify.InternalError("Database error."));
       }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}
