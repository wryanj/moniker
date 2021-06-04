/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const { Model, DataTypes } = require('sequelize');
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                                Define Model                                */
/* -------------------------------------------------------------------------- */
    class Comment extends Model { }

    Comment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            firstname_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            middlename_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date_created: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue:DataTypes.NOW
            },
        },
        {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: 'comment',
        }
    );

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = Comment;