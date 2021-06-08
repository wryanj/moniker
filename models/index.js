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
            foreignKey:'family_id',
            onDelete: 'CASCADE'
        });

/* ------------------------- User Associations ------------------------- */
    // Users belong to a single family
        User.belongsTo(Family, {
            foreignKey: 'family_id',
            onDelete: 'CASCADE'
        });

    // Users and Firstnames (Users create or select many firstnames they like)
        User.hasMany(Firstname, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "likedFirstnames"
        });

    // Users and Middlenames (Users create or select many middlenames they like)
        User.hasMany(Middlename, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "likedMiddlenames"
        });

    // Users and Comments (Users make many comments)
        User.hasMany(Comment, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });

/* ------------------------- Firstname Associations ------------------------- */
    // Firstnames are selected or created by a user
        Firstname.belongsTo(User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "likedFirstnames"
        });

    // Firstnames can have many comments made on them by different users
        Firstname.hasMany(Comment, {
            foreignKey:'firstname_id',
            onDelete: 'CASCADE'
        });

/* ------------------------- Middlename Associations ------------------------ */

    // Middlenames are selected or created by a user
        Middlename.belongsTo(User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "likedMiddlenames"
        });

    // Middlenames can have many comments made on them by different users
      Middlename.hasMany(Comment, {
        foreignKey:'middlename_id',
        onDelete: 'CASCADE'
        });

/* -------------------------- Comment Associations -------------------------- */

    // Comments are created and posted by a specific user
        Comment.belongsTo(User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
        });

    // Comments can be made about a specific firstname
        Comment.belongsTo(Firstname, {
            foreignKey: 'firstname_id',
            onDelete: 'CASCADE'
        });

    // Comments can be made about a specific middlename
        Comment.belongsTo(Middlename, {
            foreignKey: 'middlename_id',
            onDelete: 'CASCADE'
        });

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

  