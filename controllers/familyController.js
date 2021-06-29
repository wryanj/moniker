/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {Family, Name, User} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                    Define Methods For Family Controller                    */
/* -------------------------------------------------------------------------- */
    module.exports = {

      /* ----------------------------- Get All Familys ---------------------------- */

          findAll: async function (req, res) {
            try {
              const familyData = await Family.findAll({
                include: [
                  {
                    model: User
                  }
                ]
              })
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
                include: [
                  {
                    model: Name,
                    attributes: ["id", "name", "gender", "type", "family_rank"],
                    as: 'familyLikedNames'
                  }
                ],
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
                  include: [
                    {
                      model: Name,
                      attributes: ["id", "name", "gender", "type", "family_rank"],
                      as: 'familyLikedNames'
                    }
                  ],
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

        /* --------------------------- Edit Family Info -------------------------- */

          update: async function (req, res) {
            try {
              const familyData = await Family.update(req.body, {
                where: {
                  id: req.params.id
                }
              });
              res.status(200).json(familyData);
            } catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

        /* ----------------------------- Delete A Family ---------------------------- */

          remove: async function (req, res) {
            console.log('family remove controller endpoint hit');
            try {
              const familyData = await Family.destroy({
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

    }


