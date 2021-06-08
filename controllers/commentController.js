/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {Comment} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                    Define Methods For Controller                           */
/* -------------------------------------------------------------------------- */

    module.exports = {

    /* ---------------------------- Get All Comments ---------------------------- */

        findAll: async function (req, res) {
            try {
              const commentData = await Comment.findAll({});
              res.status(200).json(commentData);
            } 
            catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

    /* --------------------------- Get a comment by id -------------------------- */

          findById: async function (req, res) {
            try {
              const commentData = await Comment.findOne({
                where: { id: req.params.id },
              });
              res.status(200).json(commentData)
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

      /* ---------------------------- Create a comment ---------------------------- */

          create: async function (req, res) {
            try {
              const commentData = await Comment.create(req.body);
              res.status(200).json(commentData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

      /* ---------------------------- Update a Comment ---------------------------- */

          update: async function (req, res) {
            try {
              const commentData = await Comment.update(req.body, {
                where: {
                  id: req.params.id
                }
              });
        
              res.status(200).json(commentData);
            } catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

       /* ---------------------------- Delete A Comment ---------------------------- */

          remove: async function (req, res) {
            try {
              const commentData = await Comment.destroy({
                where: {
                  id: req.params.id
                }
              });
              res.status(200).json({message: "item deleted successfully!"});
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          }

    };