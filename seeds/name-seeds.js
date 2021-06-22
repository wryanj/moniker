/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const {Name} = require('../models');

/* -------------------------------------------------------------------------- */
/*                              Define Seed Data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Seed Data ------------------------------- */
    const nameData = [

        // Name 1
        {
            // id is created by sql
            user_id: 1, // FK for user association
            family_id: 1, // FK for family associations
            name: 'Mae',
            gender: 'female',
            type: 'first',
            user_rank: 1,
            family_rank:1
        },

        // Name 2
        {
            // id is created by sql
            user_id: 2, // FK for user association
            family_id: 1, // FK for family associations
            name: 'Bailey',
            gender: 'female',
            type: 'first',
            user_rank: 1,
            family_rank: 2
        },

        // Name 3
        {
            // id is created by sql
            user_id: 1, // FK for user association
            family_id: 1, // FK for family associations
            name: 'Riley',
            gender: 'female',
            type: 'middle',
            user_rank: 2,
            family_rank: 3
        },

         // Name 4
         {
            // id is created by sql
            user_id: 1, // FK for user association
            family_id: 1, // FK for family associations
            name: 'Bailey Mae',
            gender: 'female',
            type: 'full',
            user_rank: 1,
            family_rank: 1
        },

        // Name 5
        {
            // id is created by sql
            user_id: 1, // FK for user association
            family_id: 1, // FK for family associations
            name: 'Lucy Lou',
            gender: 'female',
            type: 'full',
            user_rank: 2,
            family_rank: 2
        }

    ];

/* -------------------------- Bulk Create Function -------------------------- */
    const seedName = () => Name.bulkCreate(nameData);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = seedName;