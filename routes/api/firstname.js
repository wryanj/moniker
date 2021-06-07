/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const firstnameController = require("../../controllers/firstnameController");

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
    .get(firstnameController.findAll)
    .post(firstnameController.create);

    // Use specified controller methods if it hits /api/firstname/id
    router
    .route("/:id")
    .get(firstnameController.findById)
    .delete(firstnameController.remove);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;    