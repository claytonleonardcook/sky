<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<h1>Welcome to Sky</h1>
<button on:click={() => goto('/profile')}>Profile</button>

