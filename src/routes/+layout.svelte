<script lang="ts">
  export let data;
</script>

<main>
  <slot />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1em;
  }
</style>
