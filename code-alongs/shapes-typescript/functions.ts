import Shape from "./Shape";

export function printAllShapes(shapes: Shape[]) {
    for (const shape of shapes) {
        shape.printShapeInfo();
        console.log('----------');
    }
}

export function sortByArea(shapes: Shape[]) {
    return shapes.sort((shape1: Shape, shape2: Shape) => {
        return shape1.getArea() - shape2.getArea();
    })
}