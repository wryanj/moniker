/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require("express").Router();
    const familyController = require("../../controllers/familyController");

/* -------------------------------------------------------------------------- */
/*                               Handle Routing                               */
/* -------------------------------------------------------------------------- */

    /*
        Calls methods based on type of axio call used on path
        PATH - homeurl/api/family
    */

   // Use specified controller methods if it hits /api/family with get, post
    router
        .route("/")
        .get(familyController.findAll)
        .post(familyController.create);

    // Used specified controller methods if it hits /api/family/id 
    router
        .route("/:id")
        .get(familyController.findById)
        .delete(familyController.remove)
        .put(familyController.update)
        .delete(familyController.remove);
    

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;