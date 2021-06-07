/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const {Family} = require('../models');

/* -------------------------------------------------------------------------- */
/*                              Define Seed Data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Seed Data ------------------------------- */
    const familyData = [

        // Family 1
        {
            // id is created by sql
            name: 'Johnson'
        },

        // Family 2
        {
            // id is created by sql
            name: 'Steers'
        },

        // Family 3
        {
            // id is created by sql
            name: 'Latty'
        }

    ];

/* -------------------------- Bulk Create Function -------------------------- */
    const seedFamily =  () => Family.bulkCreate(familyData);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = seedFamily;