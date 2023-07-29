<script lang="ts">
  import { getContext } from 'svelte';

  type $$Props = {
    placeholder: string;
  } & Omit<Partial<HTMLInputElement>, 'name'>;

  export let placeholder: string;

  const name: string = getContext('name');
</script>

<label>
  <input {name} type="radio" {...$$restProps} />
  {placeholder}
</label>
