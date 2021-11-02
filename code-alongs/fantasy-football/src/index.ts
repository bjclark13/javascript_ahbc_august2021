import express from 'express';
import cors from 'cors';
import roster from './routes/Roster';
import path from 'path';


const app = express(); // setting up the server
app.use(express.json()); // allows us to use request body in POST, etc
app.use(cors()); // makes API publically available to everyone

// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

// construct a fantasy football roster
app.use('/roster/', roster);

app.listen(port, () => {
	console.log('listening at http://localhost:' + port);
}); // starts the server
