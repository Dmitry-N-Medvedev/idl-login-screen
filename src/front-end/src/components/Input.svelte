<script>
  // import Icon from 'fa-svelte';
  // import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt.js';
  import InputText from './Inputs/Text.svelte';
  import InputCheckbox from './Inputs/Checkbox.svelte';
  import InputRadio from './Inputs/Radio.svelte';
  import InputDate from './Inputs/Date.svelte';
  import InputEmail from './Inputs/Email.svelte';

  import {
    generateComponentId,
  } from './helpers/generateComponentId.mjs';

  const components = {
    checkbox: InputCheckbox,
    text: InputText,
    radio: InputRadio,
    date: InputDate,
    email: InputEmail,
  };
</script>

<svelte:component this={components[$$restProps['type']]} id={generateComponentId(5)} {...$$props} {...$$restProps} />
