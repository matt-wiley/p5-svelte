import { ConfigHandler } from "$lib/sketchUtils/configHandler";


export function sketch001(config: any) {

    const configHandler = new ConfigHandler(config);

    let canvas: any = configHandler.get('canvas', null);

    let redrawOnResize: boolean = configHandler.get('canvas.redrawOnResize', false); // TODO: Why is this not working?
    let aspectRatio: number = configHandler.get('aspect.ratio', 16/9);
    let aspectMaxFill: number = configHandler.get('aspect.maxFill', 1.0);    
    let width: number = configHandler.get('width', 400);
    let height: number = configHandler.get('height', 400);

    let enableLoop: boolean = true;

    const kvpStore = new Map();


    const toggleFullScreen = (sketch: any) => {
        sketch.noLoop();
        if (sketch.fullscreen()) {
            aspectMaxFill = kvpStore.get('previousMaxFill');
            kvpStore.delete('previousMaxFill');
            sketch.fullscreen(false);
        }
        else {
            kvpStore.set('previousMaxFill', aspectMaxFill);
            aspectMaxFill = 1.0;
            sketch.fullscreen(true);
        }
        setTimeout(() => {
            sketch.loop();
        }, 150);
    }

    const calculateAspectWidthAndHeight = (p: any, aspectRatio: number, aspectMaxFill: number) => {
        let dimensions;
        const aspectIndex = Math.floor(aspectRatio * 100) - 100;
        // console.log(aspectIndex);
        const dimensionLimit = p.fullscreen() ? 1 : aspectMaxFill;
        if ( aspectIndex > 0) {
            // Landscape
            const limitedWidth = p.windowWidth * dimensionLimit;
            dimensions = { 
                width: limitedWidth,
                height: limitedWidth / aspectRatio
            }
        }
        else if ( aspectIndex < 0) {
            // Portrait
            const limitedHeight = p.windowHeight * dimensionLimit;
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
            sketch.background("steelblue");f
            sketch.fill("white");
            sketch.ellipse(sketch.mouseX, sketch.mouseY, 50, 50);
        };
    };

    // @ts-ignore
    let sketch001 = new window.p5(sketch);

    return {
        sketch: sketch001
    }
}