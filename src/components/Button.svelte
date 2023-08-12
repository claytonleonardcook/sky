<script lang="ts">
  type $$Props = {
    variant?: 'primary' | 'secondary';
  } & Component<HTMLButtonElement>;

  export let className: $$Props['className'] = '';
  export let variant: $$Props['variant'] = 'primary';
</script>

<button class={className} data-variant={variant} on:click {...$$restProps}>
  <slot />
</button>

<style lang="scss">
  @use 'sass:math';
  @use 'sass:color';

  button {
    border: none;
    margin-top: math.div($vr, 2);
    padding: $vr $hr;
    border-radius: $corner;
    cursor: pointer;
    transition: transform $transition, background-color $transition-fast;

    &[data-variant='primary'] {
      background-color: $primary;
      &:hover {
        background-color: darken($primary, 4%);
      }
    }

    &[data-variant='secondary'] {
      background-color: $secondary;
      &:hover {
        background-color: darken($secondary, 4%);
      }
    }

    &:hover {
      transform: translateY(math.div($vr, -2));
    }
  }
</style>
