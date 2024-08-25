<script lang="ts">
    export let sketchConfig;


    if (sketch !== undefined) {
        import { onMount } from 'svelte';

        onMount(() => {
            const container = document.getElementById('sketch-container');
            sketch.mount(container);

            return {
                destroy() {
                    sketch.remove();
                }
            }
        });
    }

</script>


<section>
    <div id="sketch-container" style="width: {width}px; height: {height}px;">
        
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #sketch-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>