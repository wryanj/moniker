/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const Family = require('./family')    
    const User = require('./user');
    const Firstname = require('./firstname');
    const Middlename = require('./middlename');
    const Comment = require('./comment');

/* -------------------------------------------------------------------------- */
/*                             Define Associations                            */
/* -------------------------------------------------------------------------- */

/* --------------------------- Family Associations -------------------------- */
    // A Family can have multiple users
        Family.hasMany(User, {
            foreignKey:'user_id',
            onDelete: 'CASCADE'
        });

    // A Family can have multiple firstnames (based on users who select them)?

    // A Family can have multiple middlenames (based on users who select them)?

/* ------------------------- User Associations ------------------------- */
    // Users belong to a single family
        User.belongsTo(Family, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });

    // Users and Firstnames (Users create or select firstnames they like)
        User.hasMany(Firstname, {
            foreignKey: 'firstname_id',
            onDelete: 'CASCADE',
        });

        // Firstname.belongsTo(User, {
        //     foreignKey: 'firstname_id',
        //     onDelete: 'CASCADE',
        // });
    
    // Users and Middlenames
        User.hasMany(Middlename, {
            foreignKey: 'middlename_id',
            onDelete: 'CASCADE',
        });

        // Firstname.belongsTo(User, {
        //     foreignKey: 'middlename_id',
        //     onDelete: 'CASCADE',
        // });

    // Users and Comments
        User.hasMany(Comment, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        })

/* ------------------------- Firstname Associations ------------------------- */

/* ------------------------- Middlename Associations ------------------------ */

/* -------------------------- Comment Associations -------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Export Modules                               */
/* -------------------------------------------------------------------------- */

    module.exports = {
        Family,
        User,
        Firstname,
        Middlename,
        Comment
    };

  