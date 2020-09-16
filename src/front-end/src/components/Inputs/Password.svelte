<script>
  import ControlContainer from '../ControlContainer.svelte';
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
  <input class="passwordInput" type="password" {...$$props} {...$$restProps} />
</ControlContainer>
