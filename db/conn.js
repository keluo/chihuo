var config = require('./config');  
var mysql = require('mysql');
 
function _conn(sqls,values,after) {
    var client = mysql.createConnection(config);
 
     client.connect(function(err){
        if (err) {
            console.log(err);
            return;
        }
        client.query(sqls || '', values || [],function(err,r){          
            after(err,r);
        });
        client.end();
    });
     
    client.on('error',function(err) {
        if (err.errno != 'ECONNRESET') {
            after("err01",false);
            throw err;
        } else {
            after("err02",false);
        }
    });
}
module.exports = _conn;