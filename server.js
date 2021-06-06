/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const express = require('express');
    const session = require('express-session');
    // const routes = require('./routes');
    const sequelize = require('./config/connection');
    const SequelizeStore = require('connect-session-sequelize')(session.Store);

/* -------------------------------------------------------------------------- */
/*                                Setup Server                                */
/* -------------------------------------------------------------------------- */

    // Stand up express server and specify port for listning
    const app = express();
    const PORT = process.env.PORT || 3001;

/* -------------------------------------------------------------------------- */
/*                              Define Middleware                             */
/* -------------------------------------------------------------------------- */

    // Define and use session object
    const sess = {
        secret: 'Super secret secret',
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize,
        }),
    };
    app.use(session(sess));

    // Define middleware for use on ALL paths starting with '/' on homepage
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Declare rule for serving up static assets (usually on heroku)
    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    }

    /*
        Below is the first direction in a chain of route mounting. This calls code
        on index within the routes directory, which further routes paths until
        the get, put, post etc methods are reached in the controllers
    */
    // app.use(routes); // Note- keep this below app.use for express or you will get Heroku issues

/* -------------------------------------------------------------------------- */
/*                         Sync DB and Start Listning                         */
/* -------------------------------------------------------------------------- */

    sequelize.sync({ force: false }).then(() => {
        app.listen(PORT, () =>
            console.log('Now listening on http://localhost:' + PORT)
        );
    });
