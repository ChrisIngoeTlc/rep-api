var RepDetails = require('../modules/RepDetailsProvider')

//Define the server API url for customer details
//Include versions as this is still a prototype
exports.setup = function ( server ) {
    server.get({path: '/Reps/:logon', flags: 'i', version: '1.0.0'},RepDetails.RepDetailsV1);
};
