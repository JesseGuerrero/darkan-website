import { Router } from 'express';

const router = Router();

router.get('*', async (req, res) => {
	res.send('Welcome to the API!');
});

export default router;