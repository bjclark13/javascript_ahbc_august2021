const query = db.books.find({
	$or: [{ year: { $lt: 1900 } }, , { year: { $gt: 2000 } }],
});
