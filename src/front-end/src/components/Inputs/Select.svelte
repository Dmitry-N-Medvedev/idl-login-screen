<script>
  import ControlContainer from '../ControlContainer.svelte';
  import {
    generateComponentId,
  } from '../helpers/generateComponentId.mjs';

  export let options;

  let datalist;

  $: if (options) {
    datalist = options.split(',');
  }
</script>
<style>
  .selectInput {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    border: none;
  }

  .selectInput::placeholder {
    text-transform: capitalize;
  }

  .selectInput:focus {
    outline: none;
  }
</style>

<ControlContainer>
  {#if datalist}
    <select {...$$props} {...$$restProps} class="selectInput">
      {#each datalist as option}
        <option value={option}>{option.toUpperCase()}</option>
      {/each}
    </select>
  {/if}
</ControlContainer>
