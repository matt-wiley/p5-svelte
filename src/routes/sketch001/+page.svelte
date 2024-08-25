<script lang="ts">
	export const ssr = false;
	import { onMount } from 'svelte';
	import { sketch001 } from './sketch001.ts';


    const sketchConfig = {
        containerId: 'sketch001',
        canvas: {
            aspect: {
                ratio: 9/16,
                maxFill: 0.8,
            },
        }
    };


	onMount(() => {
		const { sketch, container } = sketch001(sketchConfig);

        
        container.querySelector('canvas').style.border = '1px solid blue';
		return {
			destroy() {
				sketch.remove();
			}
		};
	});
</script>

<h1>Sketch001</h1>

<div id={sketchConfig.containerId} style="border: 1px solid red;" />

<style>
    #sketch001 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 80vh;
        background: teal;
    }

</style>
