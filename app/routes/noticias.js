module.exports = function (app) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'JackHammer',
        database: 'portal_noticias'
    });

    app.get('/noticias', function (req, res) {
        connection.query('Select * from noticias', function (error, result) {
            res.render('noticias/noticias', {
                noticias: result
            });
        });
    });
};