<script>
  // import Icon from 'fa-svelte';
  // import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt.js';
  import InputText from './Inputs/Text.svelte';
  import Checkbox from './Inputs/Checkbox.svelte';
  import Radio from './Inputs/Radio.svelte';

  import {
    generateComponentId,
  } from './helpers/generateComponentId.mjs';

  const components = {
    checkbox: Checkbox,
    text: InputText,
    radio: Radio,
  };
</script>

<svelte:component this={components[$$restProps['type']]} id={generateComponentId(5)} {...$$props} {...$$restProps} />
