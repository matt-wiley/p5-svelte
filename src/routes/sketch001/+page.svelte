<script lang="ts">
	export const ssr = false;
	import { onMount } from 'svelte';
	import { sketch001 } from './sketch001.ts';

	let canvas: any;

	onMount(() => {
		const { sketch } = sketch001(canvas, {
			canvas: {
				aspect: {
					ratio: 21/9,
					maxFill: 0.8
				}
			}
		});

		return {
			destroy() {
				sketch.remove();
			}
		};
	});
</script>

<div id="sketch001">
	<canvas bind:this={canvas} />
</div>

<style>
	#sketch001 {
        position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: teal;
	}

	#sketch001 canvas {
		border: 1px solid blue;
	}
</style>
