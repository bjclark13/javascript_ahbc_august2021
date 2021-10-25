import Shape from './Shape';

class Nonagon extends Shape {
    sides: number = 9;

    constructor(color: string, public sideLength: number) {
        super(color);

    }

    getArea() {
        return (9 / 4) * (this.sideLength * this.sideLength) * (1 / Math.tan(180 / 9))
    }

    getPerimeter() {
        return 9 * this.sideLength;
    }
}

export default Nonagon;