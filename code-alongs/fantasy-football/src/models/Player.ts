import IPlayer from './IPlayer';

class Player implements IPlayer {
	// extends is used for inheriting classes, implements is for interfaces
	constructor(
		public name: string,
		public teamName: string,
		public position: string,
		public starting: boolean,
		public injuredReserve: boolean = false
	) {}
}

export default Player;
