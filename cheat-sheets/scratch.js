// List only the first 3 drinks, sorted alphabetically by name. ($sort, $limit)

const query = db.menu.aggregate([
	{
        $sort: {
            price: -1
        }
    }, 
    {
        $limit: 2
    }
]);


