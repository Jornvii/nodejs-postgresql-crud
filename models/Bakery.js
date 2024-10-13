// models/bakery.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Review = require('./review');

const Bakery = sequelize.define('Bakery', {
    bakeryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: true // This can be optional
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false // You can define categories (e.g., cakes, pastries)
    }
}, {
    tableName: 'bakeries',
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Define relationships
Bakery.hasMany(Review, { foreignKey: 'bakeryId', onDelete: 'CASCADE' });
Review.belongsTo(Bakery, { foreignKey: 'bakeryId' });

module.exports = Bakery;


