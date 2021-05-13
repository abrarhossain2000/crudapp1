const { Campus, Student } = require('../models');

const seedDB = async () => {
    const dummy_campus = await Campus.create({
        name: 'Hunter College',
        description: 'This is a school in NYC.',
        address: '695 Park Ave, New York, NY 10065',
    });
    const dummy_campus2 = await Campus.create({
        name: 'Harvard',
        description: 'This is a school in MA.',
        address: '1465-1483 Massachusetts Ave, Cambridge, MA 02138',
    });

    const dummy_student = await Student.create({
        firstname: 'Joe',
        lastname: 'Shmo',
        email: 'Joe.Shmo@gmail.com',
        gpa: 3.28,
    });

    await dummy_student.setCampus(dummy_campus);
};

module.exports = seedDB;
