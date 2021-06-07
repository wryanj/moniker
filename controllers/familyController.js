/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {Family} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                    Define Methods For Family Controller                    */
/* -------------------------------------------------------------------------- */
    module.exports = {

      /* ----------------------------- Get All Familys ---------------------------- */

          findAll: async function (req, res) {
            try {
              const familyData = await Family.findAll({})
              res.status(200).json(familyData);
            } 
            catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
        
        /* --------------------------- Get a family by id --------------------------- */

          findById: async function (req, res) {
            try {
              const familyData = await Family.findOne({
                where: { id: req.params.id },
              });
              res.status(200).json(familyData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

        /* --------------------------- Get a current family by id --------------------- */

            /*

            findById: async function (req, res) {
              try {
                const familyData = await Family.findOne({
                  where: { id: req.session.family_id }, // Figure out best way to do this. 
                });
                res.status(200).json(familyData);
              } 
              catch (err) {
                console.log(err);
                res.status(422).json(err);
              }
            },

          */

        /* ----------------------------- Create a family ---------------------------- */
        
          create: async function (req, res) {
            try {
              const familyData = await Family.create(req.body);
              res.status(200).json(familyData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },
    }


