<script>
  // import Icon from 'fa-svelte';
  // import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt.js';
  import ControlContainer from '../ControlContainer.svelte';
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
  <input type="date" {...$$props} {...$$restProps} class="inputDate" />
</ControlContainer>