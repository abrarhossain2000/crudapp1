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
    const dummy_campus3 = await Campus.create({
        name: 'Drexel University',
        description: 'This is a school in PA.',
        address: '3141 Chestnut St, Philadelphia, PA 19104',
    });
    const dummy_campus4 = await Campus.create({
        name: 'University of Chicago',
        description: 'This is a school in IL.',
        address: '5801 S Ellis Ave, Chicago, IL 60637',
    });
    const dummy_campus5 = await Campus.create({
        name: 'Weber State University',
        description: 'This is a school in UT.',
        address: '3848 Harrison Blvd, Ogden, UT 84408',
    });

    const dummy_student = await Student.create({
        firstname: 'Joe',
        lastname: 'Shmo',
        email: 'Joe.Shmo@gmail.com',
        gpa: 3.28,
    });
    const dummy_student2 = await Student.create({
        firstname: 'Patricia',
        lastname: 'Coleman',
        email: 'Patricia.Coleman@gmail.com',
        gpa: 3.63,
    });
    const dummy_student3 = await Student.create({
        firstname: 'Angeline',
        lastname: 'Hass',
        email: 'Angeline.Hass@gmail.com',
        gpa: 3.9,
    });
    const dummy_student4 = await Student.create({
        firstname: 'Alejandro',
        lastname: 'Wade',
        email: 'Alejandro.Wade@gmail.com',
        gpa: 3.23,
    });
    const dummy_student5 = await Student.create({
        firstname: 'Faye',
        lastname: 'Pratt',
        email: 'Faye.Pratt@gmail.com',
        gpa: 3.96,
    });
    const dummy_student6 = await Student.create({
        firstname: 'Rochelle',
        lastname: 'Tyler',
        email: 'Rochelle.Tyler@gmail.com',
        gpa: 3.39,
    });
    const dummy_student7 = await Student.create({
        firstname: 'Lonnie',
        lastname: 'Walker',
        email: 'Lonnie.Walker@gmail.com',
        gpa: 3.85,
    });
    const dummy_student8 = await Student.create({
        firstname: 'Sabrina',
        lastname: 'Summers',
        email: 'Sabrina.Summers@gmail.com',
        gpa: 3.65,
    });
    const dummy_student9 = await Student.create({
        firstname: 'Irving',
        lastname: 'Greer',
        email: 'Irving.Greer@gmail.com',
        gpa: 2.74,
    });
    const dummy_student10 = await Student.create({
        firstname: 'Oliver',
        lastname: 'Reese',
        email: 'Oliver.Reese@gmail.com',
        gpa: 4.0,
    });
    const dummy_student11 = await Student.create({
        firstname: 'Keena',
        lastname: 'Willett',
        email: 'Keena.Willett@gmail.com',
        gpa: 3.18,
    });
    const dummy_student12 = await Student.create({
        firstname: 'Willow',
        lastname: 'Eaves',
        email: 'Willow.Eaves@gmail.com',
        gpa: 1.82,
    });
    const dummy_student13 = await Student.create({
        firstname: 'Keith',
        lastname: 'Jaramillo',
        email: 'Willow.Eaves@gmail.com',
        gpa: 2.55,
    });
    const dummy_student14 = await Student.create({
        firstname: 'Ying',
        lastname: 'Pugh',
        email: 'Ying.Pugh@gmail.com',
        gpa: 2.92,
    });
    const dummy_student15 = await Student.create({
        firstname: 'Farhan',
        lastname: 'Emerson',
        email: 'Farhan.Emerson@gmail.com',
        gpa: 4.0,
    });

    await dummy_student.setCampus(dummy_campus);
    await dummy_student2.setCampus(dummy_campus);
    await dummy_student3.setCampus(dummy_campus);
    await dummy_student4.setCampus(dummy_campus2);
    await dummy_student5.setCampus(dummy_campus2);
    await dummy_student6.setCampus(dummy_campus2);
    await dummy_student7.setCampus(dummy_campus3);
    await dummy_student8.setCampus(dummy_campus3);
    await dummy_student9.setCampus(dummy_campus3);
    await dummy_student10.setCampus(dummy_campus4);
    await dummy_student11.setCampus(dummy_campus4);
    await dummy_student12.setCampus(dummy_campus4);
    await dummy_student13.setCampus(dummy_campus5);
    await dummy_student14.setCampus(dummy_campus5);
    await dummy_student15.setCampus(dummy_campus5);
};

module.exports = seedDB;
