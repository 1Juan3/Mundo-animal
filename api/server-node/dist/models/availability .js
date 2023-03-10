"use strict";
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Availability = sequelize.define('Availability', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    veterinaryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dayOfWeek: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    endTime: {
        type: DataTypes.TIME,
        allowNull: false
    }
});
