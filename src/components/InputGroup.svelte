<script lang="ts">
  import { setContext } from 'svelte';

  type $$Props = {
    name: string;
    component?: Optional<string>;
  } & Partial<HTMLFieldSetElement>;

  export let name: $$Props['name'];
  export let component: $$Props['component'] = undefined;

  setContext('name', name);
</script>

{#if component}
  <svelte:element this={component}>
    <slot />
  </svelte:element>
{:else}
  <slot />
{/if}
