import { Router } from 'express';
import {getMongoDocs} from "./MongoDB";
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
const item_names = require("./item_names.json")

const router = Router();

router.get('/highscores', async (req, res) => {
	res.header("Content-Type",'application/json');
	let json = await getMongoDocs("highscores", { })
	res.send(JSON.stringify(json, null, 3))
});

router.get('/highscores/:player', async (req, res) => {
	res.header("Content-Type",'application/json');
	let json = await getMongoDocs("highscores", { username: req.params.player })
	res.send(JSON.stringify(json, null, 3))
});

router.get('/grand-exchange', async (req, res) => {
	res.header("Content-Type",'application/json');
	let json = await getMongoDocs("grandexchange", { })
	res.send(JSON.stringify(json, null, 3))
});

router.get('/grand-exchange/player/:player', async (req, res) => {
	res.header("Content-Type",'application/json');
	let json = await getMongoDocs("grandexchange", { username: req.params.player })
	res.send(JSON.stringify(json, null, 3))
});

router.get('/grand-exchange/item-name/:item_name', async (req, res) => {
	res.header("Content-Type",'application/json');
	let json = await getMongoDocs("grandexchange", { itemId: item_names[req.params.item_name] })
	res.send(JSON.stringify(json, null, 3))
});

router.get('/grand-exchange/item-id/:item_id', async (req, res) => {
	res.header("Content-Type",'application/json');
	let json = await getMongoDocs("grandexchange", { itemId: parseInt(req.params.item_id) })
	res.send(JSON.stringify(json, null, 3))
});

router.get('/grand-exchange/buy', async (req, res) => {
	res.header("Content-Type",'application/json');
	let json = await getMongoDocs("grandexchange", { offerType: "BUY" })
	res.send(JSON.stringify(json, null, 3))
});

router.get('/grand-exchange/sell', async (req, res) => {
	res.header("Content-Type",'application/json');
	let json = await getMongoDocs("grandexchange", { offerType: "SELL" })
	res.send(JSON.stringify(json, null, 3))
});

export default router;
