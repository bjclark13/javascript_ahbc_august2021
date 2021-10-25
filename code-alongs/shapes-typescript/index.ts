import Circle from "./Circle";
import { printAllShapes, sortByArea } from "./functions";
import Nonagon from "./Nonagon";
import Rectangle from "./Rectangle";
import Square from "./Square";
import Triangle from "./Triangle";

const shapes = [
    new Circle('red', 5),
    new Square('blue', 9),
    new Nonagon('green', 18),
    new Triangle('yellow', 2, 3, [1, 2, 3]),
    new Rectangle('burgendy', 1, 2),
    new Circle('red', 7000)
]

const sorted = sortByArea(shapes);
printAllShapes(sorted);
