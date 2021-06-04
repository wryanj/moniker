/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

/* -------------------------- Import Seed Functions ------------------------- */
    const seedFamily = require('./family-seeds');
    const seedUser = require('./user-seeds');
    const seedFirstname = require('./firstname-seeds');
    const seedMiddlename = require('./middlename-seeds');
    const seedComment = require('./comment-seeds');

/* ------------------- Import database connection instance ------------------ */
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                    Define Function for Database Seeding                    */
/* -------------------------------------------------------------------------- */
    /*
        Every time we run this seedAll function it will overwrite our existing 
        tables and refresh it with our latest models, then the data in our seed files
    */

    const seedAll = async () => {

        await sequelize.sync({ force: true }); // Force true adds a drop table if exists- so it will override any existing data we have in there. 
    
        console.log('\n----- DATABASE SYNCED -----\n');
    
        await seedFamily();
        console.log('\n----- FAMILYS SEEDED -----\n');
    
        await seedUser();
        console.log('\n----- USERS SEEDED -----\n');
    
        await seedFirstname();
        console.log('\n----- FIRSTNAMES SEEDED -----\n');
    
        await seedMiddlename();
        console.log('\n----- MIDDLENAMES SEEDED -----\n');
    
        await seedComment();
        console.log('\n----- COMMENTS SEEDED -----\n');
    
        process.exit(0);
    
    };

/* -------------------------------------------------------------------------- */
/*                          Execute Seed All Function                         */
/* -------------------------------------------------------------------------- */

    /*
        Due to something with scope, the best way to seed this should be running
        'node seeds/index.js from the root directory (as oppsed to coing into the
        seeds directory and trying to node index.js)
    */

    seedAll();
