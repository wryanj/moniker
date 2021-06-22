/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const {User} = require('../models');

/* -------------------------------------------------------------------------- */
/*                              Define Seed Data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Seed Data ------------------------------- */
    const userData = [

        // User 1
        {
            // id is created by sql
            family_id: 1, // FK for family association
            first_name: 'Ryan',
            last_name: 'Johnson',
            gender: 'male',
            role: 'Husband',
            is_admin: true,
            email: 'ryanemail@gmail.com',
            password: 'pass1234'
        },

        // User 2
        {
            // id is created by sql
            family_id: 1, // FK for family association
            first_name: 'Natalie',
            last_name: 'Johnson',
            gender: 'female',
            role: 'Wife',
            is_admin: true,
            email: 'natalieemail@gmail.com',
            password: 'pass1234'
        },

        // User 3
        {
            // id is created by sql
            family_id: 2, // FK for family association
            first_name: 'Whit',
            last_name: 'Steers',
            gender: 'male',
            role: 'husband',
            is_admin: true,
            email: 'whitemail@gmail.com',
            password: 'pass1234'
        },

        // User 4
        {
            // id is created by sql
            family_id: 2,
            first_name: 'Carleigh', // FK for family association
            last_name: 'Steers',
            gender: 'female',
            role: 'wife',
            is_admin: true,
            email: 'carleighemail@gmail.com',
            password: 'pass1234'
        },

        // User 5
        {
            // id is created by sql
            family_id: 3,
            first_name: 'Ethan', // FK for family association
            last_name: 'Latty',
            gender: 'male',
            role: 'husband',
            is_admin: true,
            email: 'ethanemail@gmail.com',
            password: 'pass1234'
        },

        // User 6
        {
            // id is created by sql
            family_id: 3,
            first_name: 'Lcat', // FK for family association
            last_name: 'Latty',
            gender: 'female',
            role: 'wife',
            is_admin: true,
            email: 'lcatemail@gmail.com',
            password: 'pass1234'
        }

    ];

/* -------------------------- Bulk Create Function -------------------------- */
    const seedUser = () => User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = seedUser;