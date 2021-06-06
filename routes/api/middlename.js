/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const middlenameController = require("../../controllers/middlenameController.js");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

     /*
        Calls methods based on type of axios call used on the path
        PATH - homeurl/api/middlename...
    */

    // Use specified controller methods if it hits /api/middlename
    router
    .route("/")
    .get(middlenameController.findAll)
    .post(middlenameController.create);

    // Use specified controller methods if it hits /api/middlename/id
    router
    .route("/:id")
    .get(middlenameController.findById)
    .delete(middleController.remove);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;  