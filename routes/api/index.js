/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const router = require("express").Router();
    const familyRoutes = require("./family");
    const userRoutes = require("./user");
    const firstnameRoutes = require("./firstname");
    const middlenameRoutes = require("./middlename");
    const fullnameRoutes = require('./fullname');
    const commentRoutes = require("./comment");

/* -------------------------------------------------------------------------- */
/*                               Manage Routing                               */
/* -------------------------------------------------------------------------- */

    /*
        Any route that hits /api and then hits one of the following paths
        (e.x /api/family) use routes defined in js within this directory. 
        Routing is directed here after /api is detected via code on index
        within the routes directory
        PATH - homeurl/api...
    */

    router.use("/family", familyRoutes);
    router.use("/user", userRoutes);
    router.use("/firstname", firstnameRoutes);
    router.use("/middlename", middlenameRoutes);
    router.use("/fullname", fullnameRoutes);
    router.use("/comment", commentRoutes);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = router;