<script>
  import Input from '../../Input.svelte';
</script>

<style>
  .SignUpOptions {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      '. suo-terms suo-terms .'
      '. suo-marketing suo-marketing .'
    ;

    grid-gap: 0.5vw;
    width: 100%;

    position: relative;
  }

  #suo-terms {
    grid-area: suo-terms;
  }

  #suo-marketing {
    grid-area: suo-marketing;
  }

  .suo-cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>

<div class="SignUpOptions" {...$$restProps}>
  <div id="suo-terms" class="suo-cell">
    <Input type="checkbox" name="terms" placeholder="I read and agree to <a href='https://google.com' target='_blank'>Terms & Conditions</a>" />
  </div>
  <div id="suo-marketing" class="suo-cell">
    <Input type="checkbox" name="marketing" placeholder="I'd like to get marketing promotions, special offers from KickID" checked />
  </div>
</div>