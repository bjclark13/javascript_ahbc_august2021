import Character from './Character';
import Jedi from './Jedi';
import Sith from './Sith';

// Darth Vader
const vader = new Sith('Darth Vader', 'human', 'Tatooine', 0, 1000);
vader.printInfo();
vader.lightSaberColor = 'red';

// Luke Skywalker
const luke = new Jedi('Luke Skywalker', 'human', 'Tatooine', 30, 999);
luke.printInfo();
luke.lightSaberColor = 'blue';

luke.battle(vader); // luke has started to fight vader

// Chewbecca
const chewie = new Character('Chewbecca', 'Wookie', 'Kashyyyk', -100, true);
chewie.printInfo();

// Darth Sidious
const sidious = new Sith('Darth Sidious', 'human', '', -50, 10000);
sidious.apprentices = [vader];

sidious.battle(luke);
vader.battle(sidious);
