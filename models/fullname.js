/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const { Model, DataTypes } = require('sequelize');
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                                Define Model                                */
/* -------------------------------------------------------------------------- */
    class Fullname extends Model { }

    Fullname.init(
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
            // If accepted after promotion by user, will be a family liked fullname
            family_id: {
                type: DataTypes.INTEGER,
                allowNull:true
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
            modelName: 'fullname',
        }
    );

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = Fullname;