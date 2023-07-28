<script lang="ts">
    import { blueskyAgentStore, blueskyJsonWebTokenStore } from "@stores/blueskyStore";

    const onSubmit = (event : SubmitEvent) => {
        const data = new FormData(event.target as HTMLFormElement);
        const {username, password} = Object.fromEntries(data);

        blueskyAgentStore.subscribe(async (value) => {
            const {data} = await value.login({identifier: username.toString(), password: password.toString()})
            blueskyJsonWebTokenStore.set(data.accessJwt);
        });

        event.preventDefault();
    }

    blueskyJsonWebTokenStore.subscribe((value) => {
        console.log(value);
    });

</script>

<form on:submit={onSubmit}>
    <label for="username">Username</label>
    <input type="text" name="username" id="username" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
    <input type="submit" value="Login" />
</form>

<style lang="scss">
</style>
