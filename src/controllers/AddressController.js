const User = require('../models/User');
const Address = require('../models/Address')

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    
    
  }
}