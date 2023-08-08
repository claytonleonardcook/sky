<script lang="ts">
  import formData, { type Input } from '../utils/Form';

  type $$Props = {
    className?: string;
    onSubmit?: (data: Record<string, Input>) => void;
  } & Partial<HTMLFormElement>;

  export let className: $$Props['className'] = '';
  export let onSubmit: $$Props['onSubmit'] = undefined;

  const onsubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    const data = formData(target);
    console.log(data);
    // onSubmit && onSubmit(data);
  };
</script>

<form class={className} on:submit={onsubmit} {...$$restProps}>
  <slot />
</form>
