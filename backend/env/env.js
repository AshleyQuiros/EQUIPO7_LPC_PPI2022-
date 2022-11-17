const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bzjvmk3hxvre6u7kdw74-mysql.services.clever-cloud.com',
    user: 'uswgcpclibssdjns',
    password: 'FUtQacIC2Ww1UwXwUSqI',
    database: 'bzjvmk3hxvre6u7kdw74',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;