import Shape from "./Shape";

class Circle extends Shape {
    sides = 1;
    radius: number;

    constructor(color: string, radius: number) {
        super(color);

        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * (this.radius * this.radius);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

export default Circle;