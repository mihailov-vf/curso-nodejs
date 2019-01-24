module.exports.index = function (application, req, res) {
    res.render('index', {
        validacao: {}
    });
};

module.exports.autenticar = function (application, req, res) {
    var dadosForm = req.body;

    req.assert('usuario', 'O campo "usuario" deve estar preenchido').notEmpty();
    req.assert('senha', 'O campo "senha" deve estar preenchido').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('index', {
            validacao: errors
        });
        return;
    }

    var connection = application.config.dbConnection;
    var usuariosDAO = new application.app.models.UsuariosDAO(connection);

    usuariosDAO.autenticar(dadosForm, req, res);
};