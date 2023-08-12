<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../components/Button.svelte";

</script>

<Button on:click={() => goto('/login')}>Login</Button>

<style lang="scss">
</style>
