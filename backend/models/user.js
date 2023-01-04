module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      is_professor: DataTypes.BOOLEAN,
    });
  };
  
  