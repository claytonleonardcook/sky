<script lang="ts">
  type $$Props = Component<HTMLFormElement>;

  export let className: $$Props['className'] = '';
</script>

<form class={className} on:submit {...$$restProps}>
  <slot />
</form>

<style lang="scss"></style>
