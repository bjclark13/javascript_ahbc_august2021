const { getArea, getPerimeter } = require('./square');

describe('getArea', function () { // test suite
	test('area of square of 2 should be 4', function () { // tests in the suite
        const area = getArea(2);
        expect(area).toEqual(4);
    });

    test('area of 0 should be 0', function() {
        const area = getArea(0);
        expect(area).toEqual(0);
    });
});

describe('getPerimeter', function () { // test suite
	test('perimeter of square of 2 should be 8', function () { // tests in the suite
        const p = getPerimeter(2);
        expect(p).toEqual(8);
    });

    test('perimeter of square of 0 should be 0', function () { // tests in the suite
        const p = getPerimeter(0);
        expect(p).toEqual(0);
    });

});
