/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const {Firstname} = require('../models');

/* -------------------------------------------------------------------------- */
/*                              Define Seed Data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Seed Data ------------------------------- */
    const firstnameData = [

        // Firstname 1
        {
            // id is created by sql
            user_id: 1, // FK for user association
            family_id: 1, // FK for family associations
            name: 'Mae',
            gender: 'Female',
            user_rank: 1,
            family_rank:1
        },

        // Firstname 2
        {
            // id is created by sql
            user_id: 2, // FK for user association
            family_id: 1, // FK for family associations
            name: 'Bailey',
            gender: 'Female',
            user_rank: 1,
            family_rank: 2
        },

        // Firstname 3
        {
            // id is created by sql
            user_id: 1, // FK for user association
            family_id: 1, // FK for family associations
            name: 'Riley',
            gender: 'Female',
            user_rank: 2,
            family_rank: 3
        }

    ];

/* -------------------------- Bulk Create Function -------------------------- */
    const seedFirstname =  () => Firstname.bulkCreate(firstnameData);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = seedFirstname;