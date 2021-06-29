/**
 * Consider a function which calculates the area when a shape is provided
 * For simplicity, getArea returns 0.
 */

type Shape = "square" | "rectangle";
/** 
 * Uncomment below code and comment above line, you will
 * see that getArea function will not compile, you will have
 * to handle the circle shape in getArea method.
 */
// type Shape = "square" | "rectangle" | "circle";

/**
 * Make sure all shapes are handled with
 * the help of never. If our Shape type
 * is updated, the getArea method will not
 * compile unless that type is handled in
 * the getArea method
 */
function getArea(shape: Shape): number {

    if (shape === "square") {
        return 0;
    } else if (shape === "rectangle") {
        return 0;
    }

    const ensureNever: never = shape;
    return ensureNever;

}
