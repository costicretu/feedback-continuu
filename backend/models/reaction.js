module.exports = (sequelize, DataTypes) => {
    return sequelize.define("reaction", {
      type: DataTypes.STRING,
    });
  };
  
  