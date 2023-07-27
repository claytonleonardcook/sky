<script lang="ts">
</script>

<button {...$$restProps} on:click>
  <slot />
</button>

<style>
  button {
    all: unset;
    height: 1em;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0.5rem;
    border: solid #000 1px;
    border-radius: 0.5em;
    background-color: #fff;
    color: #000;
    transition-duration: 0.5s;
    cursor: pointer;
    transform: scale(1);
  }
</style>
