/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {User, Name, Family} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                    Define Methods For User Controller                      */
/* -------------------------------------------------------------------------- */
    module.exports = {

    /* ------------------------------ Get all Users ----------------------------- */

        findAll: async function (req, res) {
            try {
              const userData = await User.findAll({
                include: [
                  {
                    model: Family,
                    attributes: ["name"]
                  },
                  {
                    model: Name,
                    attributes: ["id", "name", "gender", "type", "user_rank"],
                    as: 'userLikedNames'
                  }
                ]
              })
              res.status(200).json(userData);
            } 
            catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

    /* -------------------------- Get the current user -------------------------- */

        findCurrentUser: async function (req, res) {
            console.log('findCurrentUser endpoint hit');
            try {
              const userData = await User.findOne({
                where: { id: req.session.user_id },
                include: [
                  {
                    model: Family,
                    attributes: ["name"]
                  },
                  {
                    model: Name,
                    attributes: ["id", "name", "gender", "type", "user_rank", "is_visible"],
                    as: 'userLikedNames'
                  }
                ]
              });
              res.status(200).json(userData.dataValues);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* ---------------------------- Get a user by id ---------------------------- */

          findById: async function (req, res) {
            try {
              const userData = await User.findOne({
                where: { id: req.params.id },
                include: [
                  {
                    model: Family,
                    attributes: ["name"]
                  },
                  {
                    model: Name,
                    attributes: ["id", "name", "gender", "type", "user_rank"],
                    as: 'userLikedNames'
                  }
                ]
              });
              res.status(200).json(userData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* ------------------------------ Create a user ----------------------------- */

          create: async function (req, res) {
            try {
              const userData = await User.create(req.body);
              res.status(200).json(userData);
            } 
            catch (err) {
              console.log(err);
              res.status(422).json(err);
            }
          },

    /* --------------------------- Edit User Info ------------------------------ */

        update: async function (req, res) {
          try {
            const userData = await User.update(req.body, {
              where: {
                id: req.params.id
              }
            });
            res.status(200).json(userData);
          } catch (err) {
            console.log(err);
            res.status(422).json(err);
          }
        },

    /* ------------------------------ Delete a User ----------------------------- */

        remove: async function (req, res) {
          try {
            const userData = await User.destroy({
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