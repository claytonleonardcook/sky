<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<main class="main">
  <h1>Welcome to Sky</h1>
  <button on:click={() => goto('/profile')}>Profile</button>
</main>

<style lang="scss">
</style>
