<script lang="ts">
  import { getContext } from 'svelte';

  type $$Props = {
    placeholder: string;
  } & Partial<HTMLInputElement>;

  export let placeholder: string;
  const name: string = getContext('name');
</script>

<label>
  {placeholder}
  <input {name} {...$$restProps} />
</label>
