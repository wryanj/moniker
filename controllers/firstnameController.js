/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {Firstname} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                 Define Methods For Firstname Controller                    */
/* -------------------------------------------------------------------------- */

    module.exports = {

    /* ---------------------- Get all firstnames From DB --------------------- */

        findAll: async function (req, res) {
            try {
              const firstnameData = await Firstname.findAll({})
              res.status(200).json(firstnameData);
            } 
            catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

    /* -------------------------- Get a firstname by id ------------------------- */

        findById: async function (req, res) {
            try {
              const firstnameData = await Firstname.findOne({
                where: { id: req.params.id},
              });
              res.status(200).json(firstnameData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* ------- Create a firstname (via selection of one, or custom entry) ------- */

        create: async function (req, res) {
            try {
              const firstnameData = await Firstname.create(req.body);
              res.status(200).json(firstnameData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* --------------------------- Edit Firstname Info -------------------------- */

        update: async function (req, res) {
          try {
            const firstnameData = await Firstname.update(req.body, {
              where: {
                id: req.params.id
              }
            });
            res.status(200).json(firstnameData);
          } catch (err) {
            console.log(err);
            res.status(422).json(err);
          }
        },

    /* --------------------------- Delete a firstname --------------------------- */

        remove: async function (req, res) {
            try {
              const firstnameData = await Firstname.destroy({
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
