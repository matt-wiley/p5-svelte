import { ConfigHandler } from "$lib/sketchUtils/configHandler";


export function sketch001(canvas: any, config: any) {

    const configHandler = new ConfigHandler(config);



    let redrawOnResize: boolean = configHandler.get('canvas.redrawOnResize', false); // TODO: Why is this not working?
    let aspectRatio: number = configHandler.get('canvas.aspect.ratio', 16/9);
    let aspectMaxFill: number = configHandler.get('canvas.aspect.maxFill', 1.0);    
    let width: number = configHandler.get('canvas.width', 400);
    let height: number = configHandler.get('canvas.height', 400);


    const kvpStore = new Map();


    const toggleFullScreen = (p: any) => {
        if (p.fullscreen()) {
            aspectMaxFill = kvpStore.get('previousMaxFill');
            kvpStore.delete('previousMaxFill');
            p.fullscreen(false);
        }
        else {
            kvpStore.set('previousMaxFill', aspectMaxFill);
            aspectMaxFill = 1.0;
            p.fullscreen(true);
        }
    }

    const calculateAspectWidthAndHeight = (p: any, aspectRatio: number, aspectMaxFill: number) => {
        let dimensions;
        const aspectIndex = Math.floor(aspectRatio * 100) - 100;
        // console.log(aspectIndex);
        if ( aspectIndex > 0) {
            // Landscape
            const limitedWidth = p.windowWidth * aspectMaxFill;
            dimensions = { 
                width: limitedWidth,
                height: limitedWidth / aspectRatio
            }
        }
        else if ( aspectIndex < 0) {
            // Portrait
            const limitedHeight = p.windowHeight * aspectMaxFill;
            dimensions = { 
                width: limitedHeight * aspectRatio, 
                height: limitedHeight 
            }
        }
        return dimensions;
    }


    const sketch = (sketch: any) => {
        
        sketch.setup = () => {
            if (aspectRatio) {
                // @ts-ignore
                const { width, height } = calculateAspectWidthAndHeight(sketch, aspectRatio, aspectMaxFill);
                sketch.createCanvas(width, height, canvas);
                sketch.windowResized = () => {
                    // @ts-ignore
                    const { width, height } = calculateAspectWidthAndHeight(sketch, aspectRatio, aspectMaxFill);
                    sketch.resizeCanvas(width, height, true);
                }
            } else {
                sketch.createCanvas(width, height, canvas);
            }

            sketch.keyPressed = () => {
                console.log(sketch.key.toString());
                if (sketch.key.toString() === 'f') {
                    toggleFullScreen(sketch);
                }
            }

        };

        sketch.draw = () => {
            sketch.background("steelblue");
        };
    };

    // @ts-ignore
    let sketch001 = new window.p5(sketch);

    return {
        sketch: sketch001
    }
}