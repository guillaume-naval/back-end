const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database");

const User = sequelize.define("User", {
    // Model attributes are defined here
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = User;
// the defined model is the class itself
console.log(User === sequelize.models.User); // true