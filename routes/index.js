/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const path = require("path");
    const router = require("express").Router();
    const apiRoutes = require("./api");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

    /*
        Any call that uses /api, direct to utilize api routes defined in
        the api folder. Directed here from app.use routes in the server.js
        PATH - homeurl/...
    */
    router.use('/api', apiRoutes);

    /*
         If no api route is hit, send React App
    */
    router.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = router;