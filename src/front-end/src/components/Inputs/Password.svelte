<script>
  import { createEventDispatcher } from 'svelte';
  import ControlContainer from '../ControlContainer.svelte';

  const dispatch = createEventDispatcher();
  let password;

  $: if (password) {
    dispatch('message', {
      payload: password,
    });
  }
</script>
<style>
  .passwordInput {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    border: none;
  }

  .passwordInput::placeholder {
    text-transform: capitalize;
  }

  .passwordInput:focus {
    outline: none;
  }
</style>

<ControlContainer>
  <input class="passwordInput" type="password" {...$$props} {...$$restProps} bind:value={password} />
</ControlContainer>
