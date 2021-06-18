/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const nameController = require("../../controllers/nameController");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

    /*
        Calls methods based on type of axios call used on the path
        PATH - homeurl/api/name...
    */

    // Use specified controller methods if it hits /api/name
    router
    .route("/")
    .get(nameController.findAll)
    .post(nameController.create);

    // Use specified controller methods if it hits /api/name/id
    router
    .route("/:id")
    .get(nameController.findById)
    .put(nameController.update)
    .delete(nameController.remove);


/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;    