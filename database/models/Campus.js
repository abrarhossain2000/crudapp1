const Sequelize = require('sequelize');
const { validate } = require('../db');
const db = require('../db');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue:
            'https://static.vecteezy.com/system/resources/thumbnails/000/363/064/small/5_-_1_-_School.jpg',
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },

    description: {
        type: Sequelize.TEXT,
    },
});

module.exports = Campus;
