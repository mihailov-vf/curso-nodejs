function NoticiasDAO(connection) {
    this.connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this.connection.query('SELECT * from noticias order by data_criacao desc', callback);
};
NoticiasDAO.prototype.getNoticia = function (callback) {
    this.connection.query('SELECT * from noticias WHERE id_noticia = 10', callback);
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