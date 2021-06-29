/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const { Model, DataTypes } = require('sequelize');
    const bcrypt = require('bcrypt');
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                                Define Model                                */
/* -------------------------------------------------------------------------- */
    class User extends Model {
        // Check password method used on authController for login
        checkPassword(loginPw) {
            return bcrypt.compareSync(loginPw, this.password);
        };
    }

    User.init (
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            family_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: [['male', 'female', 'other']], 
                },
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: [['husband', 'wife', 'other']],
                },
            },
            is_admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [8],
                },
            },
            profile_icon: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        },
        {
            hooks: {
                beforeCreate: async (newUserData) => {
                    newUserData.password = await bcrypt.hash(newUserData.password, 10);
                    return newUserData;
                },
                beforeUpdate: async (updatedUserData) => {
                    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                    return updatedUserData;
                },
            },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'user',
        }

    );

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = User;