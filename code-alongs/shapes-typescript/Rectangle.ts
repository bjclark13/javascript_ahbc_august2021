// Notes:
// rectangles have to have a length and a widgth
// how do we make that so that we can configure

import Shape from "./Shape";

// these values when we create the object?
class Rectangle extends Shape {
    sides: number = 4;

    constructor(color: string, public length: number, public width: number) {
        super(color);
    }

    getArea(): number {
        // l * w 
        return this.length * this.width;
    }

    getPerimeter(): number {
        // 2 * (l + w)
        return 2 * (this.length + this.width); // 3 6
    }

}

export default Rectangle;