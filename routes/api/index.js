/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const authRoutes = require("./auth");
    const familyRoutes = require("./family");
    const userRoutes = require("./user");
    const nameRoutes = require("./name");
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

    router.use("/auth", authRoutes)
    router.use("/family", familyRoutes);
    router.use("/user", userRoutes);
    router.use("/name", nameRoutes);
    router.use("/comment", commentRoutes);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = router;