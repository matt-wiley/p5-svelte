<script lang="ts">

</script>
<!-- 
    This component is used to display the environment variables 
    that are available to the application at runtime.

    !! This component is only available in development mode !!
-->
<h1>Env</h1>
<!-- 
    This is a conditional block that will only render the 
    table if the application is not in production mode. 
-->
<!-- {#if !(import.meta.env.MODE === 'production')} -->
<table>
    <thead>
        <tr>
            <th align="left">Key</th>
            <th class="col-space" />
            <th align="left">Value</th>
        </tr>
    </thead>
    <tbody>
        {#each Object.entries(import.meta.env) as [key, value]}
            <tr>
                <td><b>{key}</b></td>
                <td class="col-space" />
                <td>{value}</td>
            </tr>
        {/each}
    </tbody>
</table>
<!-- {/if} -->


<style>
    .col-space {
        width: 1rem;
    }
</style>