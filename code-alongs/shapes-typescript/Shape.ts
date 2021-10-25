// shape class
abstract class Shape {
    color: string;
    abstract sides: number; // it's up to the subclass to define

    constructor(color: string) {
        this.color = color;
    }

    abstract getArea(): number;
    abstract getPerimeter(): number;

    printShapeInfo(): void {
        console.log(`
            Color: ${this.color}   
            Sides: ${this.sides}   
            Area: ${this.getArea()}
            Perimeter: ${this.getPerimeter()}
        `);
    }
}

export default Shape;