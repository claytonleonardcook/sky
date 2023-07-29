<script lang="ts">
  import { setContext } from 'svelte';

  type $$Props = {
    name: string;
  } & Partial<HTMLFieldSetElement>;

  export let name: string;

  setContext('name', name);
</script>

<fieldset {...$$restProps}>
  <slot />
</fieldset>
