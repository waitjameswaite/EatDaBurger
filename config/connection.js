var mysql = require('mysql');
var connection;

// if(process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'waitjameswaite',
        password: 'FuggitLexiconBayblades2',
        database: 'burgers_db'
    });
// }
