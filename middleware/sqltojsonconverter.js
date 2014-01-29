exports.JsonifyRecordset = JsonifyRecordset;

function JsonifyRecordset(recordset, callback) {
    try{
        var jsonObject = [{}];
        for (var i = 0; i < recordset.rows.length; i++) {
            var jsonRow = {};
            for (var j = 0; j < recordset.meta.length; j++) {
                var paramName = recordset.meta[j].name;
                var paramValue = recordset.rows[i][j];
                jsonRow[paramName] = paramValue;
            }
            jsonObject[i] = jsonRow;
        }
        return callback(null,jsonObject);
    }
    catch(err){
        return callback(new Error(err));
    }
}
