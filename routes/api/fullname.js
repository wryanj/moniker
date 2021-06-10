/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const fullnameController = require("../../controllers/fullnameController");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

    /*
        Calls methods based on type of axios call used on the path
        PATH - homeurl/api/firstname...
    */

    // Use specified controller methods if it hits /api/firstname
    router
    .route("/")
    .get(fullnameController.findAll)
    .post(fullnameController.create);

    // Use specified controller methods if it hits /api/firstname/id
    router
    .route("/:id")
    .get(fullnameController.findById)
    .put(fullnameController.update)
    .delete(fullnameController.remove);


/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;   