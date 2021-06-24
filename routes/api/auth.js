/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const authController = require("../../controllers/authController");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

    /*
        Calls methods based on type of axios call used on the path
        PATH - homeurl/api/auth...
    */

     // Use specified controller methods if it hits /api/auth/signup
     router
        .route("/signup")
            .post(authController.signup);

    // Use specified controller methods if it hits /api/auth/authcheck
    router
       .route("/authcheck")
           .get(authController.authcheck);
           
    // Use specified controller methods if it hits /api/auth/login
    router
        .route("/login")
            .post(authController.login);

    // Use specified controller methods if it hits /api/auth/logout
    router
        .route("/logout")
            .post(authController.logout);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;