const query = db.players.updateOne(
	{ lastName: 'Brady' },
	{
		$set: {
			team: ObjectId('61ba7db78aefa7b8eea3bc0f'),
		},
	}
);
