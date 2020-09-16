<style>
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
</style>

<div class="input">
  <slot></slot>
</div>