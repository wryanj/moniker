/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const Family = require('./family')    
    const User = require('./user');
    const Name = require('./name');
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

    // A Family can haave multiple mutually liked firstnames, if promoted and accepted family members
        Family.hasMany(Name, {
            foreignKey:'family_id',
            onDelete: 'CASCADE',
            as: "familyLikedNames"
        });

/* ------------------------- User Associations ------------------------- */
    // Users belong to a single family
        User.belongsTo(Family, {
            foreignKey: 'family_id',
            onDelete: 'CASCADE'
        });

    // Users and Firstnames (Users create or select many firstnames they like)
        User.hasMany(Name, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "userLikedNames"
        });

    // Users and Comments (Users make many comments)
        User.hasMany(Comment, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });

/* ------------------------- Name Associations ---------------------------- */

    // Firstnames can be promoted by a user and accepted as a family liked firstname
        Name.belongsTo(Family, {
            foreignKey: 'family_id',
            onDelete: 'CASCADE',
            as: "familyLikedNames"
        });

    // Firstnames are selected or created by a user
        Name.belongsTo(User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "userLikedNames"
        });

    // Firstnames can have many comments made on them by different users
        Name.hasMany(Comment, {
            foreignKey:'name_id',
            onDelete: 'CASCADE'
        });

/* -------------------------- Comment Associations -------------------------- */

    // Comments are created and posted by a specific user
        Comment.belongsTo(User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
        });

    // Comments can be made about a specific firstname
        Comment.belongsTo(Name, {
            foreignKey: 'name_id',
            onDelete: 'CASCADE'
        });

/* -------------------------------------------------------------------------- */
/*                               Export Modules                               */
/* -------------------------------------------------------------------------- */

    module.exports = {
        Family,
        User,
        Name,
        Comment
    };

  