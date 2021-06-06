/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const userController = require("../../controllers/userController");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

    /*
        Calls methods based on type of axios call used on the path
        PATH - homeurl/api/comment...
    */

    // Use specified controller methods if it hits /api/user
    router
    .route("/")
    .get(userController.findAll)
    .post(userController.create);

    // Use specified controller methods if it hits /api/user/current
    router
    .route("/current")
    .get(userController.findCurrentUser);

    // Use specified controller methods if it hits /api/user/id
    router
    .route("/:id")
    .get(userController.findById)
    /*
    .put(familyController.update)
    .delete(familyController.remove);
    */

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;