import express from 'express';

let router = express.Router();

router.use((req, res, next) => {
    console.log('API request for:  ' + req.path);
    next();
});

router.use('/users', require('./users'));

router.use((req, res, next, err) => {
    if (err) res.status(500).send(err);
});

export default router;