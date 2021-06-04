/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const { Model, DataTypes } = require('sequelize');
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                                Define Model                                */
/* -------------------------------------------------------------------------- */
    class Firstname extends Model { }

    Firstname.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            // User who likes or submits the name
            user_id: {
                type: DataTypes.INTEGER,
                allowNull:false
            },
            // The actual firstname
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: [['Male', 'Female']],
                },
            },
            user_rank: {
                type:DataTypes.INTEGER,
                allowNull:true
            },
            family_rank: {
                type:DataTypes.INTEGER,
                allowNull:true
            }
        },
        {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: 'firstname',
        }
    );

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = Firstname;