module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {
        validacao: {},
        dadosForm: {}
    });
};

module.exports.cadastrar = function (application, req, res) {
    var dadosForm = req.body;

    req.assert('nome', 'Nome deve ser preenchido').notEmpty();
    req.assert('usuario', 'Usuário deve ser preenchido').notEmpty();
    req.assert('senha', 'Senha deve ser preenchido').notEmpty();
    req.assert('casa', 'A Casa deve ser escolhida').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('cadastro', {
            validacao: errors,
            dadosForm: dadosForm
        });
        return;
    }

    res.send('Podemos cadastrar');
};