import Dog from './Dog';

class Corgi extends Dog {
	name: string = 'corgi';

	sound() {
		return 'Super aggressive ' + super.sound().toLowerCase();
	}
}

export default Corgi;
