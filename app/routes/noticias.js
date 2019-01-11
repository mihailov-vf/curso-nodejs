var connection = require('../../config/dbConnection')();

module.exports = function (app) {

    app.get('/noticias', function (req, res) {
        connection.query('Select * from noticias', function (error, result) {
            res.render('noticias/noticias', {
                noticias: result
            });
        });
    });
};