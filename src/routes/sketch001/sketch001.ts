import { ConfigHandler } from "$lib/sketchUtils/configHandler";


interface Dimensions {
    width: number;
    height: number;
}

export function sketch001(config: any) {

    const configHandler = new ConfigHandler(config);
    const containerId = configHandler.get('containerId');
    const aspectRatio = configHandler.get('canvas.aspect.ratio', 16/9);
    const aspectMaxFill = configHandler.get('canvas.aspect.maxFill', 1.0);
    const width = configHandler.get('canvas.width', 400);
    const height = configHandler.get('canvas.height', 400);

    const container = document.getElementById(containerId) as Node;


    const calculateAspectWidthAndHeight = (p: any, aspectRatio: number, aspectMaxFill: number) => {
        let dimensions : Dimensions = { width: p.windowWidth, height: p.windowHeight };
        const aspectIndex = Math.floor(aspectRatio * 100) - 100;
        console.log(aspectIndex);
        if ( aspectIndex > 0) {
            // Landscape
            const limitedWidth = p.windowWidth * aspectMaxFill;
            dimensions = { ...dimensions, width: limitedWidth }
            dimensions = { ...dimensions, height: limitedWidth / aspectRatio }
        }
        else if ( aspectIndex < 0) {
            // Portrait
            const limitedHeight = p.windowHeight * aspectMaxFill;
            dimensions = { ...dimensions, height: limitedHeight }
            dimensions = { ...dimensions, width: limitedHeight * aspectRatio }
        }
        return dimensions;
    }


    const sketch = (p: any) => {
        
        p.setup = () => {
            if (aspectRatio) {
                const dimensions = calculateAspectWidthAndHeight(p, aspectRatio, aspectMaxFill);
                p.createCanvas(dimensions.width, dimensions.height);
                p.windowResized = () => {
                    const dimensions = calculateAspectWidthAndHeight(p, aspectRatio, aspectMaxFill);
                    console.log(dimensions);
                    console.log(p.windowWidth, p.windowHeight);
                    p.resizeCanvas(dimensions.width, dimensions.height);
                };
            } else {
                p.createCanvas(width, height);
            }

            p.background(255);
            
        };

        p.draw = () => {
            if (p.mouseIsPressed) {
                p.fill(0);
            } else {
                p.fill(255);
            }
            p.ellipse(p.mouseX, p.mouseY, 80, 80);
        };
    };

    // @ts-ignore
    let sketch001 = new window.p5(sketch, container);

    return {
        sketch: sketch001,
        container: container
    }
}