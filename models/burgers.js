var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  create: function(column, vals, callback) {
    orm.create("burgers", column, vals, function(res) {
      callback(res);
    });
  },
  update: function(obj, status, callback) {
    orm.update("burgers", obj, status, function(res) {
      callback(res);
    });
  },
  delete: function(status, callback) {
    orm.delete("burgers", status, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;