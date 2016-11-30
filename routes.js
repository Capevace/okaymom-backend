const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');
const family  = require('./model/family/family-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to okaymom-backend API!' });
});

router.use('/user', user);
router.use('/family', family);


module.exports = router;
