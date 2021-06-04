/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const {Middlename} = require('../models');

/* -------------------------------------------------------------------------- */
/*                              Define Seed Data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Seed Data ------------------------------- */
    const middlenameData = [

        // Middlename 1
        {
            // id is created by sql
            user_id: 1,
            name: 'Lucille',
            gender: 'Female',
            user_rank: 1,
            family_rank:1
        },

        // Middlename 2
        {
            // id is created by sql
            user_id: 2,
            name: 'Nicole',
            gender: 'Female',
            user_rank: 1,
            family_rank: 2
        },
        
        // Middlename 3
        {
            // id is created by sql
            user_id: 1,
            name: 'Katherine',
            gender: 'Female',
            user_rank: 2,
            family_rank: 3
        }

    ];

/* -------------------------- Bulk Create Function -------------------------- */
    const seedMiddlename =  () => Middlename.bulkCreate(middlenameData);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = seedMiddlename;
