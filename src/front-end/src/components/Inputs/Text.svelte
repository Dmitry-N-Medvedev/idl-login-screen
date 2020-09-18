<script>
  import { createEventDispatcher } from 'svelte';
  import ControlContainer from '../ControlContainer.svelte';

  const dispatch = createEventDispatcher();
  let text;

  $: if (text) {
    dispatch('message', {
      payload: text,
    });
  }
</script>
<style>
  .textInput {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    border: none;
  }

  .textInput::placeholder {
    text-transform: capitalize;
  }

  .textInput:focus {
    outline: none;
  }
</style>

<ControlContainer>
  <input class="textInput" type="text" {...$$props} {...$$restProps} bind:value={text} />
</ControlContainer>
