<script>
    import { supabase } from "./supabaseClient";
    import { replace } from "svelte-spa-router";

    let email = '';
    let password = '';
    let errorMessage = '';

    const login = async () => {

        const { user, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            errorMessage = error.message;
        } else {
            errorMessage = '';
            // Handle successful login
            console.log('User logged in:', user);
            replace('/');
        }
    };
</script>

<div>
    <h1>Login</h1>
    <form on:submit|preventDefault={login}>
        <label>
            Email:
            <input type="email" bind:value={email} required />
        </label>
        <label>
            Password:
            <input type="password" bind:value={password} required />
        </label>
        <button type="submit">Login</button>
    </form>
    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}
</div>