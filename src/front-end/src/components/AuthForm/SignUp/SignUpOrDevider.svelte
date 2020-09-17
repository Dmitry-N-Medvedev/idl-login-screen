<style>
  .SignUpOrDevider {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;

    position: relative;

    text-transform: uppercase;
  }

  .SignUpOrDevider::before,
  .SignUpOrDevider::after {
    content: " ";
    position: absolute;
    height: 3px;
    background-color: var(--body-font-color);
    width: calc(37% - 15% / 2);
  }

  .SignUpOrDevider::before {
    left: 15%;
  }

  .SignUpOrDevider::after {
    right: 15%;
  }
</style>

<div class="SignUpOrDevider">
  {$$restProps['title'] ?? 'N/A'}
</div>