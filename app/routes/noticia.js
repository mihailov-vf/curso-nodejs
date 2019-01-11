module.exports = function (app) {
    app.get('/noticia', function (req, res) {
        var connection = app.config.dbConnection();

        connection.query('Select * from noticias WHERE id_noticia = 2', function (error, result) {
            res.render('noticias/noticia', {
                noticia: result
            });
        });
    });
};