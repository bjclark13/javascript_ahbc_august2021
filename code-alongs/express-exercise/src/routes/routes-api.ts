import express from 'express';
import Shop from '../models/Shop';

const routes = express.Router(); // note the syntax

const shops: Shop[] = [
	{ id: 111, name: "Pepper's Pizza", rating: 4.5 },
	{ id: 222, name: "Clive's Chives", rating: 3.4 },
	{ id: 333, name: "Bretty's Brews", rating: 4.3 },
	{ id: 444, name: "Sylvester's Shoes", rating: 3.8 },
	{ id: 555, name: "Teddy's Tunes", rating: 4.7 },
];

// API ENDPOINTS
routes.get('/shops', (req, res) => {
	let filteredShops = shops; // by default return everything

	// get the minrating querystring
	// filter out the shops that don't match
	if (req.query.minRating) {
		const minRating = parseFloat(req.query.minRating as string); // decimals, typecasting as string

		filteredShops = filteredShops.filter((shop) => {
            return shop.rating >= minRating;
        });
	}

	res.json(filteredShops);
});

routes.get('/shops/:id', (req, res) => {
	const id = parseInt(req.params.id); // whole numbers

	// find the shop that matches this id
	const shop = shops.find(looking => looking.id === id); // looking for one match

	if (shop !== undefined) {
		// no match return undefined
		res.json(shop);
	} else {
		res.status(404);
		res.json({
			error: `Shop not found: ${id}`,
		});
	}
});

export default routes;
