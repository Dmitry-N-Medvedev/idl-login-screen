<script>
  import Icon from 'fa-svelte/index.js';

  import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt.js';

  export let hint = '';
  export let type = 'text';
  export let name;
</script>

<style>
  :root {
    --input-height: 3vh;
  }

  .input {
    display: flex;
    flex: 1 0 auto;
    justify-content: flex-start;
    align-items: center;

    height: var(--input-height);
    padding: calc(var(--input-height) / 2);

    border-top-right-radius: calc(var(--input-height) / 2);
    border-bottom-right-radius: calc(var(--input-height) / 2);
    border-top-left-radius: calc(var(--input-height) / 2);
    border-bottom-left-radius: calc(var(--input-height) / 2);

    background-color: var(--input-background-color);
    color: var(--input-font-color);

    pointer-events: all;
    user-select: auto;
    cursor: pointer;
    position: relative;
  }

  .input-hint {
    position: fixed;
    pointer-events: none;
    user-select: none;
  }
</style>

<div class="input" data-type={type} data-name={name}>
  <div class="input-hint">{hint}</div>
  <Icon icon={faCalendarAlt}></Icon>
</div>