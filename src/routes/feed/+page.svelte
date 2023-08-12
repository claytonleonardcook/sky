<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../components/Button.svelte";

</script>

<main class="main">
    <Button on:click={() => goto('/login')}>Login</Button>
</main>

<style lang="scss">
</style>
