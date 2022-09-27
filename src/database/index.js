const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Addresses = require('../models/Address');

const connection = new Sequelize(dbConfig);

User.init(connection);
Addresses.init(connection)

module.exports = connection;