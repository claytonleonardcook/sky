<script lang="ts">
  type $$Props = {
    onSubmit: Optional<(data: FormData) => void>;
  } & Partial<HTMLFormElement>;

  export let onSubmit: Optional<(data: FormData) => void>;

  const onsubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;

    const data = new FormData(target);
    onSubmit && onSubmit(data);
  };
</script>

<form on:submit={onsubmit} {...$$restProps}>
  <slot />
</form>
