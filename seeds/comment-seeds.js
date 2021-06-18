/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
const {Comment} = require('../models');

/* -------------------------------------------------------------------------- */
/*                              Define Seed Data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Seed Data ------------------------------- */
    const commentData = [

        // Comment 1
        {
            // id is created by sql
            user_id: 1, // FK for user association
            name_id: 1, // FK for name association
            comment: 'This one is for sure a winner can we do it?'
        },

        // Comment 2
        {
            // id is created by sql
            user_id: 2, // FK for user association
            name_id: 2, // FK for name association
            comment: 'YES! I love this one too we will rank it on the top right now'
        },

    ];

/* -------------------------- Bulk Create Function -------------------------- */
    const seedComment =  () => Comment.bulkCreate(commentData);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = seedComment;
