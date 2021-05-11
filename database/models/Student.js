const Sequelize = require('sequelize');
const { validate } = require('../db');
const db = require('../db');

const Student = db.define('student', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue:
            'https://www.flaticon.com/svg/vstatic/svg/194/194931.svg?token=exp=1620699950~hmac=913a21c60bee24ef5fe276b69859ecff',
    },

    gpa: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            min: 0.0,
            max: 4.0,
        },
    },
});

module.exports = Student;
