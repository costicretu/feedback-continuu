const Sequelize = require("sequelize");
const sequelize = new Sequelize("proiect", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: true,
  },
});

module.exports = sequelize;
