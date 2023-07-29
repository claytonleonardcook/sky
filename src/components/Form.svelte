<script lang="ts" strictEvents>
  type $$Props = {
    className?: string;
  } & Partial<HTMLFormElement>;

  export let className = '';
</script>

<form class={`Form ${className}`} {...$$restProps}>
  <slot />
</form>
