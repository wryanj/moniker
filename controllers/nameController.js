/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {Name} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                 Define Methods For Name Controller                         */
/* -------------------------------------------------------------------------- */

    module.exports = {

    /* ---------------------- Get all names From DB --------------------- */

        findAll: async function (req, res) {
            try {
              const nameData = await Name.findAll({})
              res.status(200).json(nameData);
            } 
            catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

    /* -------------------------- Get a name by id ------------------------- */

        findById: async function (req, res) {
            try {
              const nameData = await Name.findOne({
                where: { id: req.params.id},
              });
              res.status(200).json(nameData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* ------- Create a name (via selection of one, or custom entry) ------- */

        create: async function (req, res) {
            try {
              const nameData = await Name.create(req.body);
              res.status(200).json(nameData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* --------------------------- Edit name Info -------------------------- */

        update: async function (req, res) {
          try {
            const nameData = await Name.update(req.body, {
              where: {
                id: req.params.id
              }
            });
            res.status(200).json(nameData);
          } catch (err) {
            console.log(err);
            res.status(422).json(err);
          }
        },

    /* --------------------------- Delete a name --------------------------- */

        remove: async function (req, res) {
            try {
              const nameData = await Name.destroy({
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
