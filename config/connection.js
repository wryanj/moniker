/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const Sequelize = require('sequelize');
    require('dotenv').config();

/* -------------------------------------------------------------------------- */
/*                       Define Connection Configuration                      */
/* -------------------------------------------------------------------------- */
    // Define seqelize instance
    let sequelize;

    // Define config to utilize locally, or via server using jawsDB on Heroku
    if (process.env.JAWSDB_URL) {
        sequelize = new Sequelize(process.env.JAWSDB_URL);
    } 
    else {
        sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
            }
        );
    }

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = sequelize;