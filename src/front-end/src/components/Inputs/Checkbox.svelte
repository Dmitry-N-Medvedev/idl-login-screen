<style>
  .checkboxContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .checkboxInput {
    position: relative;
    display: flex;
    flex: 1 0 auto;

    appearance: none;
    width: calc(var(--input-height) / 2);
    height: calc(var(--input-height) / 2);

    background-color: var(--body-background-color);
    border: 6px solid var(--body-background-color);
    transition: 0.8s background-color ease-out;

    margin: 0 0.25vw 0 0;

    cursor: pointer;
  }

  .checkboxInput:checked {
    background-color: var(--body-font-color);

    transition: 0.2s background-color ease-in;
  }

  .checkboxInput:focus {
    outline: none;
  }

  .checkboxLabel {
    flex: 9 0 auto;
  }
</style>

<div class="checkboxContainer">
  <input type="checkbox" {...$$props} {...$$restProps} class="checkboxInput" />
  <label for={$$restProps['id']} class="checkboxLabel">{@html $$restProps['placeholder']}</label>
</div>