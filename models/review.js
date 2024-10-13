// models/review.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('../User');
const Bakery = require('../Bakery');

const Review = sequelize.define('Review', {
    reviewId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'reviews'
});

// Relationships
User.hasMany(Review, { foreignKey: 'userId', onDelete: 'CASCADE' });
Review.belongsTo(User, { foreignKey: 'userId' });

Bakery.hasMany(Review, { foreignKey: 'bakeryId', onDelete: 'CASCADE' });
Review.belongsTo(Bakery, { foreignKey: 'bakeryId' });

module.exports = Review;
