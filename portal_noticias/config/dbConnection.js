var mysql = require('mysql');

var connection = function () {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'JackHammer',
        database: 'portal_noticias'
    });
};

module.exports = function () {
    return connection;
};