const { Op } = require('sequelize')
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // Encontrar todos os usuários que têm o email que termian com @rocketseat.com.br
    // Desses usuários eu quero buscar todos que moram na "Rua Guilherme Gembala"
    // Desses usuários quero buscar as tecnologias que começam com React

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.like]: '%@rocketseat.com.br'
        }
      }, 
      
      include: [
        { association: 'addresses', where: { street: 'rua guilherme gembala' } }, // endereços
        { association: 'techs', 
          where: { 
            name: {
              [Op.like]: 'Node%'
            }
           } 
      }, // tecnologias
      ]
    })

    return res.json(users);
  }
}