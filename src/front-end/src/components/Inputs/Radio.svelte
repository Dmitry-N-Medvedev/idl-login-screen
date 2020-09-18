<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let value;

  $: if (value) {
    console.debug('value', value);
  }

  const handleInput = () => {
    dispatch('message', {
      payload: $$restProps['value'],
    });
  };
</script>

<style>
  .radioInput {
    display: flex;
    appearance: none;
    border-radius: 50%;

    width: calc(var(--input-height) / 2);
    height: calc(var(--input-height) / 2);

    background-color: var(--body-background-color);
    border: 6px solid var(--body-background-color);

    margin: 0 0 0 0.5vw;

    cursor: pointer;

    transition: 0.8s background-color ease-out;
  }

  .radioInput:checked {
    background-color: var(--body-font-color);

    transition: 0.2s background-color ease-in;
  }

  .radioInput:focus {
    outline: none;
  }

  .radioLabel {
    margin-left: 0.25vw;
  }
</style>

<input type="radio" {...$$props} {...$$restProps} class="radioInput" on:input={handleInput} bind:value={value} autocomplete />
<label for={$$restProps['id']} class="radioLabel">{$$restProps['label']}</label>