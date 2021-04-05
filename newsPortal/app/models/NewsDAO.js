function NewsDAO (connection) {
  this._connection = connection
}

NewsDAO.prototype.getNews = function (callback) {
  this._connection.query('select * from news', callback)
}  

NewsDAO.prototype.getNotice = function (callback) {
  this._connection.query('select * from news where idNews = 2', callback)
}

NewsDAO.prototype.saveNews = function (news, callback) {
  this._connection.query('insert into news set ? ', news, callback)
}

module.exports =  function () {
  return NewsDAO
}
