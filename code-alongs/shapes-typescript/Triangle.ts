import Shape from "./Shape";

class Triangle extends Shape {
    sides: number = 3;
    base: number;

    constructor(color: string, base: number, public height: number, public sidesLengths: number[]) {
        super(color);
        this.base = base;
    }

    getArea(): number {
        return (this.base * this.height) / 2
    }

    getPerimeter(): number {
        // get the sum of side length
        let sum = 0;

        for (let length of this.sidesLengths) {
            sum += length
        }

        return sum;
    }

}

// new Triangle('red', 4, 6, [1,2,3]);

export default Triangle;