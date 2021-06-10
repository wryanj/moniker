/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const {Fullname} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                        Define Methods For Controller                       */
/* -------------------------------------------------------------------------- */

    module.exports = {

    /* ---------------------- Get all fullnamenames From DB --------------------- */

        findAll: async function (req, res) {
            try {
              const fullnameData = await Fullname.findAll({})
              res.status(200).json(fullnameData);
            } 
            catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

    /* -------------------------- Get a fullnamename by id ------------------------- */

        findById: async function (req, res) {
            try {
              const fullnameData = await Fullname.findOne({
                where: { id: req.params.id},
              });
              res.status(200).json(fullnameData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* ------- Create a fullnamename (via selection of one, or custom entry) ------- */

        create: async function (req, res) {
            try {
              const fullnameData = await Fullname.create(req.body);
              res.status(200).json(fullnameData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* --------------------------- Edit Fullname Info -------------------------- */

        update: async function (req, res) {
          try {
            const fullnameData = await Fullname.update(req.body, {
              where: {
                id: req.params.id
              }
            });
            res.status(200).json(fullnameData);
          } catch (err) {
            console.log(err);
            res.status(422).json(err);
          }
        },

    /* --------------------------- Delete a fullname ---------------------------- */

        remove: async function (req, res) {
            try {
              const fullnameData = await Fullname.destroy({
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