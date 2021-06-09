/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const {Fullname} = require('../models');

/* -------------------------------------------------------------------------- */
/*                              Define Seed Data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Seed Data ------------------------------- */
    const fullnameData = [

        // Fullname 1
        {
            // id is created by sql
            user_id: 1, // FK for user association
            name: 'Mae Lucille',
            gender: 'Female',
            user_rank: 1,
            family_rank:1
        },

        // Fullname 2
        {
            // id is created by sql
            user_id: 2, // FK for user association
            name: 'Bailey Katherine',
            gender: 'Female',
            user_rank: 1,
            family_rank: 2
        },

        // Fullname 3
        {
            // id is created by sql
            user_id: 1, // FK for user association
            name: 'Riley Lucille',
            gender: 'Female',
            user_rank: 2,
            family_rank: 3
        }

    ];

/* -------------------------- Bulk Create Function -------------------------- */
    const seedFullname =  () => Fullname.bulkCreate(fullnameData);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = seedFullname;