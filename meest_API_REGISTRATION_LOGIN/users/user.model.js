const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        userName: { type: DataTypes.STRING, allowNull: false },
        gender: { type: DataTypes.STRING, allowNull: false },
        phoneNumber: { type: DataTypes.STRING, allowNull: false },
        dateOfJoining: { type: DataTypes.STRING, allowNull: false },
        designation: { type: DataTypes.STRING, allowNull: false },
        dateOfBirth: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        department: { type: DataTypes.STRING, allowNull: false },
        position: { type: DataTypes.STRING, allowNull: false },
        
        
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes);
}