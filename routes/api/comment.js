/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const commentController = require("../../controllers/commentController");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

    /*
        Calls methods based on type of axios call used on the path
        PATH - homeurl/api/comment...
    */

    // Use specified controller methods if it hits /api/comment
    router
    .route("/")
    .get(commentController.findAll)
    .post(commentController.create);

    // Used specified controller methods if it hits /api/comment/id 
    router
    .route("/:id")
    .get(commentController.findById)
    .delete(familyController.remove);
    /*
    .put(familyController.update)
    */

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;