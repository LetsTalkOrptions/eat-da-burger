var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burgers", function(result) {
      callback(result);
    });
  },
  create: function(column, vals, callback) {
    orm.create("burgers", column, vals, function(result) {
      callback(result);
    });
  },
  update: function(obj, status, callback) {
    orm.update("burgers", obj, status, function(result) {
      callback(result);
    });
  },
  delete: function(status, callback) {
    orm.delete("burgers", status, function(result) {
      callback(result);
    });
  }
};

module.exports = burger;