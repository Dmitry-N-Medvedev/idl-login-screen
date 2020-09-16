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
  }

  .checkboxLabel {
    flex: 9 0 auto;
  }
</style>

<div class="checkboxContainer">
  <input type="checkbox" {...$$props} {...$$restProps} class="checkboxInput" />
  <label for={$$restProps['id']} class="checkboxLabel">{@html $$restProps['placeholder']}</label>
</div>