<script>
  import { createEventDispatcher } from 'svelte';
  import ControlContainer from '../ControlContainer.svelte';

  const dispatch = createEventDispatcher();

  let selectedDate;

  $: if (selectedDate) {
    dispatch('message', {
      payload: selectedDate
    });
  }
</script>

<style>
  .inputDate {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    border: none;

    cursor: pointer;
  }

  .inputDate::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  .inputDate:focus {
    outline: none;
  }
</style>

<ControlContainer>
  <input type="date" {...$$props} {...$$restProps} class="inputDate" bind:value={selectedDate} />
</ControlContainer>