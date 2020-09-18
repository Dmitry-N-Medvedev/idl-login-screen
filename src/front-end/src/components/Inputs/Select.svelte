<script>
  import { createEventDispatcher } from 'svelte';
  import ControlContainer from '../ControlContainer.svelte';
  import {
    generateComponentId,
  } from '../helpers/generateComponentId.mjs';

  export let options;

  const dispatch = createEventDispatcher();

  let datalist;
  let selectedValue;

  $: if (options) {
    datalist = options.split(',');
  }

  $: if (selectedValue) {
    dispatch('message', {
      payload: selectedValue,
    });
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

  .sendingData {
    filter: blur(5px);
    background-color: brown;
  }
</style>

<ControlContainer>
  {#if datalist}
    <select {...$$props} {...$$restProps} class="selectInput" bind:value={selectedValue}>
      {#each datalist as option}
        <option value={option}>{option.toUpperCase()}</option>
      {/each}
    </select>
  {/if}
</ControlContainer>
