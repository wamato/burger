var Sequelize = require("sequelize");


var sequelize = new Sequelize("burgers_db", "root", "root221", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
