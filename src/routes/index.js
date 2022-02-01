import express from "express";

const router = express.Router();

router.get('/', async (req, res) => {
    let reactComp = ''; // So that program doesn't break
    res.status(200).render('pages/index', { reactApp: reactComp });
});

export default router;