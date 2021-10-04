function converter(temp, unit) {
	// 0, C
	if (unit.toUpperCase() === 'C') {
		return temp * (9 / 5) + 32;
	}

	if (unit.toUpperCase() === 'F') {
		return (temp - 32) * (5 / 9);
	}
}

module.exports = converter;
