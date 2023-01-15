module.exports = (sequelize, DataTypes) => {
    return sequelize.define("activity", {
        name:DataTypes.STRING,
        description: {type: DataTypes.STRING, unique : true},
        unique_code: DataTypes.STRING,
        deadline: DataTypes.DATE,
    });
};

