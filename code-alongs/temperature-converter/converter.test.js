const converter = require('./converter');

describe('converter', function () {
	// 0, C -> F
	test('converts 0C to 32F', function () {
		expect(converter(0, 'C')).toEqual(32);
	});

	// 32, F
	test('converts 32F to 0C', function () {
		expect(converter(32, 'F')).toEqual(0);
	});

    test('converts -40F to -40C', function () {
		expect(converter(-40, 'F')).toEqual(-40);
	});

    test('converts -40F to -40C', function () {
		expect(converter(-40, 'F')).toEqual(-40);
	});

    test('converts -40f to -40C', function () {
		expect(converter(-40, 'f')).toEqual(-40);
	});

    // not C or F, return false

	// -123, C
	// -123, F

	// abc, C
	// abc, F

	// testing more than one number at a time
	// should be an error
});
