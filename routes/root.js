const router = require('express').Router();

router.get('/', (req, res) => {
  return res.render('root', { title: 'home' });
});

module.exports = router;
