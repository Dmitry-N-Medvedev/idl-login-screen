<script>
  import { createEventDispatcher } from 'svelte';
  import Input from '../../Input.svelte';

  export let positions;

  const dispatch = createEventDispatcher();
  const handleMessage = ({ detail }) => dispatch('message', detail);
</script>

{#if positions}
  {#each positions as position }
    <Input type="radio" {...position} on:message={handleMessage} />
  {/each}
{/if}