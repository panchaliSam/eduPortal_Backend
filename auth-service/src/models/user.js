const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define("User", {
    UserID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true },
    Password: { type: DataTypes.STRING, allowNull: false },
    Role: { type: DataTypes.ENUM("learner", "instructor", "admin"), allowNull: false },
}, {
    tableName: 'User',
});

module.exports = User;
