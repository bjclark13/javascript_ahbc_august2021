import express from 'express';
import Shop from '../models/Shop';

const routes = express.Router();

const shops: Shop[] = [
	{ id: 111, name: "Pepper's Pizza", rating: 4.5 },
	{ id: 222, name: "Clive's Chives", rating: 3.4 },
	{ id: 333, name: "Bretty's Brews", rating: 4.3 },
	{ id: 444, name: "Sylvester's Shoes", rating: 3.8 },
	{ id: 555, name: "Teddy's Tunes", rating: 4.7 },
];

routes.get('/', (req, res) => {
	// homepage
	res.render('homepage');
});

// WEBPAGES
routes.get('/shop-list', (req, res) => {
	const minRating = parseFloat(req.query.minRating as string);

	if (minRating) {
		const filtered = shops.filter(shop => {
			return shop.rating >= minRating;
		});

		res.render('shop-list', { shops: filtered });
	} else {
		// do something
		res.render('shop-list', { shops });
	}
});

routes.get('/shop-search-form', (req, res) => {
	// do something
	res.render('shop-search-form');
});

routes.get('/shop-details/:id', (req, res) => {
	// do something
	const id = parseInt(req.params.id);

	const shop = shops.find(shop => shop.id === id);

	if (shop !== undefined) {
		res.render('shop-details', { shop });
	} else {
		res.status(404);
		res.render('404', { id });
	}
});

export default routes;
