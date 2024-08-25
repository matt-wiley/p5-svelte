

function isMouseButtonPressed(sketch: any, button: any) : boolean {
    return sketch.mouseIsPressed && sketch.mouseButton === button;
}


/**
 * Returns true if the mouse cursor is over the canvas
 * 
 * @param sketch p5 instance 
 * @returns boolean 
 */
export function isMouseCursoOverCanvas(sketch: any) : boolean {
    return sketch.mouseX < 0 || sketch.mouseX > sketch.width || sketch.mouseY < 0 || sketch.mouseY > sketch.height
}

/**
 * Returns true if the left mouse button is pressed
 * 
 * @param sketch p5 instance 
 * @returns boolean 
 */
export function isLeftMouseButtonPressed(sketch: any) : boolean {
    return isMouseButtonPressed(sketch, sketch.LEFT);
}

/**
 * Returns true if the right mouse button is pressed
 * 
 * @param sketch p5 instance 
 * @returns boolean 
 */
export function isRightMouseButtonPressed(sketch: any) : boolean {
    return isMouseButtonPressed(sketch, sketch.RIGHT);
}



