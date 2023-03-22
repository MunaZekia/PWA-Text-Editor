const router = require('express').Router();
const {user} = require('../../models');

router.get('/', async (req, res) => { 
  const userData = await user.findAll();
  attributes: {exclude: ['password']},
  order: [['name', 'ASC']],
});
 const users = userData.map((user) => user.get({ plain: true }));
    
    
  // TODO: Render template with Sequelize data
  res.render('homepage', {users});
});

module.exports = router;
