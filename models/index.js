/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const Family = require('./family')    
    const User = require('./user');
    const Firstname = require('./firstname');
    const Middlename = require('./middlename');
    const Fullname = require("./fullname");
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
        Family.hasMany(Firstname, {
            foreignKey:'family_id',
            onDelete: 'CASCADE',
            as: "familyLikedFirstnames"
        });

    // A Family can haave multiple mutually liked middlenames, if promoted and accepted family members
        Family.hasMany(Middlename, {
            foreignKey:'family_id',
            onDelete: 'CASCADE',
            as: "familyLikedMiddlenames"
        });

    // A Family can haave multiple mutually liked fullnames, if promoted and accepted family members
        Family.hasMany(Fullname, {
            foreignKey:'family_id',
            onDelete: 'CASCADE',
            as: "familyLikedFullnames"
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
            as: "userLikedFirstnames"
        });

    // Users and Middlenames (Users create or select many middlenames they like)
        User.hasMany(Middlename, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "userLikedMiddlenames"
        });

    // Users and Middlenames (Users create or select many middlenames they like)
        User.hasMany(Fullname, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "userLikedFullnames"
        });

    // Users and Comments (Users make many comments)
        User.hasMany(Comment, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });

/* ------------------------- Firstname Associations ------------------------- */

    // Firstnames can be promoted by a user and accepted as a family liked firstname
        Firstname.belongsTo(Family, {
            foreignKey: 'family_id',
            onDelete: 'CASCADE',
            as: "familyLikedFirstnames"
        });

    // Firstnames are selected or created by a user
        Firstname.belongsTo(User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "userLikedFirstnames"
        });

    // Firstnames can have many comments made on them by different users
        Firstname.hasMany(Comment, {
            foreignKey:'firstname_id',
            onDelete: 'CASCADE'
        });

/* ------------------------- Middlename Associations ------------------------ */

    // Firstnames can be promoted by a user and accepted as a family liked firstname
        Middlename.belongsTo(Family, {
            foreignKey: 'family_id',
            onDelete: 'CASCADE',
            as: "familyLikedMiddlenames"
        });

    // Middlenames are selected or created by a user
        Middlename.belongsTo(User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "userLikedMiddlenames"
        });

    // Middlenames can have many comments made on them by different users
        Middlename.hasMany(Comment, {
            foreignKey:'middlename_id',
            onDelete: 'CASCADE'
        });

/* ------------------------- Fullname Associations --------------------------- */

    // Firstnames can be promoted by a user and accepted as a family liked firstname
        Fullname.belongsTo(Family, {
            foreignKey: 'family_id',
            onDelete: 'CASCADE',
            as: "familyLikedFullnames"
        });
    
    // Fullnames are created by users by mixing first and middle
        Fullname.belongsTo(User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            as: "userLikedFullnames"
        });

    // Fullnames can have many comments made on them by different users
        Fullname.hasMany(Comment, {
            foreignKey:'fullname_id',
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
    
    // Comments can be made about a specific middlename
        Comment.belongsTo(Fullname, {
            foreignKey: 'fullname_id',
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
        Fullname,
        Comment
    };

  