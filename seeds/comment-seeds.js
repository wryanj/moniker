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
            firstname_id: 1, // FK for firstname association (if its on a firstname)
            middlename_id: null, // FK for middlename association (if its on a middlename)
            comment: 'This one is for sure a winner can we do it?',
            date_created: "2021-05-01T16:45:12+0000" // Will create automatically when posting in real life
        },

        // Comment 2
        {
            // id is created by sql
            user_id: 2, // FK for user association
            firstname_id: 1, // FK for firstname association (if its on a firstname)
            middlename_id: null, // FK for middlename association (if its on a middlename)
            comment: 'YES! I love this one too we will rank it on the top right now',
            date_created: "2021-05-01T16:45:12+0000" // Will create automatically when posting in real life
        },

    ];

/* -------------------------- Bulk Create Function -------------------------- */
    const seedComment =  () => Comment.bulkCreate(commentData);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = seedComment;
