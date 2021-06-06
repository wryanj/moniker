/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const firstnameController = require("../../controllers/firstnameController");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

    // Matches with "/api/firstname"
    router
    .route("/")
    .get(firstnameController.findAll)
    .post(firstnameController.create);

    // Matches with "/api/firstname/:id"
    router
    .route("/:id")
    .get(firstnameController.findById)
    .delete(firstnameController.remove);

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;    