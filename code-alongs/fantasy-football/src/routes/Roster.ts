import express, { application } from 'express';
import IPlayer from '../models/IPlayer';
import Player from '../models/Player';

const roster = express.Router();

// create our apis

// array of players
const players: IPlayer[] = [];

// add players
roster.post('/', (req, res) => {
	const player = new Player(
		req.body.name,
		req.body.team,
		req.body.position,
		true,
		false
	);

    players.push(player);

	res.json(player);
});

// edit player information
// .splice()

// delete players
// .splice()

// get all players
roster.get('/', (req, res) => {
    res.json(players); // return the players array
})

// get player by name
// for, forEach, .find()

// get players that have specific position
// for, forEach, .filter()

export default roster;
