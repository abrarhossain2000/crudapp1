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
        "https://img.icons8.com/pastel-glyph/2x/person-male.png",
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
