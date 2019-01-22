module.exports.iniciaChat = function (application, req, res) {
    var dadosForm = req.body;
    req.assert('apelido', 'O Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'O Apelido deve ter entre 3 e 15 caracteres').len(3, 15);

    var errors = req.validationErrors();
    if (errors) {
        res.render('index', {
            errors: errors
        });
    }

    application.get('io').emit('msgParaCliente', {
        apelido: dadosForm.apelido,
        mensagem: 'Acabou de entrar no chat.'
    });

    res.render('chat', {
        dadosForm: dadosForm
    });
};