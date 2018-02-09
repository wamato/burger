var db = require("./models");
var Burgers = db.Burgers;

module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    Burgers.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/burgers", function(req, res) {
    Burgers.create({
      burgers_name: req.body.burgers_name,
      devoured: req.body.devoured
    }).then(function(data) {
      res.json(data);
    });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });

  });

  app.put("/api/burgers", function(req, res) {
    
    Burgers.update({
      burgers_name: req.body.burgrs_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};
