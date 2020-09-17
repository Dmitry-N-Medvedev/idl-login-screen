<style>
  :root {
    --sign-up-button-radius: calc(var(--input-height) / 2);
  }

  .SignUpButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;

    position: relative;
  }

  .SignUpButton {
    text-transform: uppercase;

    height: calc(var(--input-height) * 1.25);

    border-top-left-radius: var(--sign-up-button-radius);
    border-top-right-radius: var(--sign-up-button-radius);
    border-bottom-left-radius: var(--sign-up-button-radius);
    border-bottom-right-radius: var(--sign-up-button-radius);

    width: 70%;

    color: var(--input-font-color);
    background-color: var(--auth-form-background-color);

    border: none;
    cursor: pointer;

    filter: drop-shadow(1px 1px 4px var(--auth-form-background-color));
  }

  .SignUpButton:focus,
  .SignUpButton:active {
    outline: none;

    filter: drop-shadow(1px 1px 1px var(--auth-form-background-color));
  }
</style>

<div class="SignUpButtonContainer" {...$$restProps}>
  <input type="submit" value="sign up" class="SignUpButton" />
</div>
