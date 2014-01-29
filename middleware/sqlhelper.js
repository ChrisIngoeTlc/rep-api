var sql = require('../lib/sql');
var applog = require('winston');

exports.RunSqlCommand = RunSqlCommand;

function RunSqlCommand(command, callback) {
    sql.open(nconf.get('Data:ConnectionString'), function (err, conn) {
        if (err) {
            applog.error("Error opening the database connection. " + err.message);
            return callback(err);
        }
        conn.queryRaw(command, function (err, results) {
            if (err) {
                applog.error("Error running query. " + err.message);
                return callback(err);
            }
            callback(null, results);
            conn.close();
            conn = null;
            return;
		});
    });
}
