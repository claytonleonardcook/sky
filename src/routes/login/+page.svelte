<script lang="ts">
  import { browser } from '$app/environment';
  import type { BskyAgent } from '@atproto/api';
  import { blueskyAgentStore } from '@stores/blueskyStore';
  import Button from '../../components/Button.svelte';

  let agent: BskyAgent | null = null;

  blueskyAgentStore.subscribe((bskyAgent) => (agent = bskyAgent));

  const handleLoginSubmit = async (event: SubmitEvent) => {
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const [username, password] = data;
    if (browser) {
      if (agent) {
        const { data } = await agent.login({
          identifier: username[1].toString(),
          password: password[1].toString(),
        });
        localStorage.setItem('jwt', data.accessJwt);
      }
    }
  };
</script>

<main class="main">
  <form class="login" on:submit={handleLoginSubmit}>
    <h1>Login</h1>
    <label>
      <span>Username</span>
      <input name="username" type="text" placeholder="Username" required />
    </label>
    <label>
      <span>Password</span>
      <input name="password" type="password" placeholder="Password" required />
    </label>
    <Button type="submit" variant="primary">Login</Button>
  </form>
</main>

<style lang="scss">
  form.login {
    display: flex;
    flex-direction: column;
    padding: $vr * 2 $hr;
    gap: $vr;
  }
</style>
