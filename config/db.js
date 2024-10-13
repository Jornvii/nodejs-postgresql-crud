const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bakery_db', 'postgres', '12345678', {
host: 'localhost',
dialect: 'postgres',
});

module.exports = sequelize;