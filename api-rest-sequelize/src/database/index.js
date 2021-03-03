const Sequelize = require('sequelize');
const dbConfig = require('../config/index');
const User = require('../model/User');
const Finances = require('../model/Finances');

const connection = new Sequelize(dbConfig);

User.init(connection);
Finances.init(connection);

User.associate(connection.models);
Finances.associate(connection.models);

module.exports = connection;