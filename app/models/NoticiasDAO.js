function NoticiasDAO(connection) {
    this.connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this.connection.query('SELECT * from noticias order by data_criacao desc', callback);
};
NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this.connection.query('SELECT * from noticias WHERE id_noticia = ' + id_noticia, callback);
};
NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this.connection.query('INSERT INTO noticias set ?', noticia, callback);
};
NoticiasDAO.prototype.retornarUltimasnoticias = function (callback) {
    this.connection.query('SELECT * FROM noticias order by data_criacao desc limit 5', callback);
};

module.exports = function () {
    return NoticiasDAO;
};