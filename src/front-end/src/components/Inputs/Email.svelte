<script>
  import { createEventDispatcher } from 'svelte';
  import ControlContainer from '../ControlContainer.svelte';

  const dispatch = createEventDispatcher();
  let email;

  $: if (email) {
    dispatch('message', {
      payload: email,
    })
  }
</script>
<style>
  .emailInput {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    border: none;
  }

  .emailInput::placeholder {
    text-transform: capitalize;
  }

  .emailInput:focus {
    outline: none;
  }
</style>

<ControlContainer>
  <input class="emailInput" type="email" {...$$props} {...$$restProps} bind:value={email} />
</ControlContainer>
