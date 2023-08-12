<script lang="ts">
  import { browser } from '$app/environment';
  import type { BskyAgent } from '@atproto/api';
  import { blueskyAgentStore } from '@stores/blueskyStore';
  import { Button, TextInput, Form } from '@components';

  let agent: BskyAgent | null = null;

  blueskyAgentStore.subscribe((bskyAgent) => (agent = bskyAgent));

  const handleLoginSubmit = async (event: SubmitEvent) => {
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const [username, password] = data;
    console.log(username, password);
    // if (browser) {
    //   if (agent) {
    //     const { data } = await agent.login({
    //       identifier: username[1].toString(),
    //       password: password[1].toString(),
    //     });
    //     localStorage.setItem('jwt', data.accessJwt);
    //   }
    // }
  };
</script>

<main class="main">
  <Form className="login" on:submit={handleLoginSubmit}>
    <h1>Login</h1>
    <TextInput name="username" type="text" placeholder="Username" required />
    <TextInput name="password" type="password" placeholder="Password" required />
    <!-- <Input name="gender" type="radio" placeholder="Male" value="male" /> -->
    <Button type="submit" variant="primary">Login</Button>
  </Form>
</main>

<style lang="scss">
  main {
    > :global(.login) {
      display: flex;
      flex-direction: column;
      padding: $vr * 2 $hr;
      gap: $vr;
    }
  }
</style>
