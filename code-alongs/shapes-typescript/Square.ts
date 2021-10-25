// how can we create a rectangle where the length 
// and width are the same?
import Rectangle from "./Rectangle";

class Square extends Rectangle {
    constructor(color: string, lengthAndWidth: number ) {
        super(color, lengthAndWidth, lengthAndWidth);
    }
}

export default Square;