/**
 * user.js
 * Vishal Kumar
 */

'use strict';

const createModel = (sequelize, { STRING, INTEGER }) => {
    const User = sequelize.define('User', {
        userId: {
            allowNull: false,
            primaryKey: true,
            type: INTEGER,
            autoIncrement: true,
        },
        email: {
            type: STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    return User;
};

module.exports = {
    createModel,
};