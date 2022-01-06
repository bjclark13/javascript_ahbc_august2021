scratch = db.menu.aggregate([
	{
		$match: { type: 'Espresso' },
	},
	{
		$project: {
			item: '$name',
			price: 1,
			priceWithTax: { $multiply: ['$price', 1.06] },
		},
	},
	{
		$project: {
			item: 1,
			price: 1,
			priceWithTaxRounded: { $trunc: [$priceWithTax, 2] },
		},
	},
]);
