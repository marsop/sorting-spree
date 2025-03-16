<script>
    import { supabase } from "./supabaseClient";
    import { onMount } from "svelte";
    import { replace} from 'svelte-spa-router'

    let user = undefined;

    onMount(async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
            console.error("Error getting session:", error);
        } else {
            console.log("Session data:", data);
            user = data.session?.user ?? null;
            if (!user) {
                console.log("User not logged in, redirecting to login page");
                replace("/login");
            } else {
                replace("/rules");
            }
        }
    });
</script>
