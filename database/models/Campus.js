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
            'https://www.flaticon.com/svg/vstatic/svg/3315/3315761.svg?token=exp=1620698998~hmac=c963694631776a276112d071b52136b2',
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
