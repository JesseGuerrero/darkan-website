const Router = require('express').Router;

const router = Router();

router.use('*', (req, res, next) => {
	res.send('API memes!');
});

module.exports = router;