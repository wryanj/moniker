/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const {Middlename} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                Define Methods For Middlename Controller                    */
/* -------------------------------------------------------------------------- */

    module.exports = {

    /* ---------------------- Get all middlenames From DB --------------------- */

        findAll: async function (req, res) {
            try {
              const middlenameData = await Middlename.findAll({})
              res.status(200).json(familyData);
            } 
            catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

    /* -------------------------- Get a middlename by id ------------------------- */

        findById: async function (req, res) {
            try {
              const middlenameData = await Middlename.findOne({
                where: { id: req.params.id},
              });
              res.status(200).json(userData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* ------- Create a middlename (via selection of one, or custom entry) ------- */

        create: async function (req, res) {
            try {
              const middlenameData = await Middlename.create(req.body);
              res.status(200).json(orgData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* --------------------------- Delete a middlename --------------------------- */

        remove: async function (req, res) {
            try {
              const middlenameData = await Middlename.destroy({
                where: {
                  id: req.params.id
                }
              });
              res.status(200).json(ticketData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          }
        
    };