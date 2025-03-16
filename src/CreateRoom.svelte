<script>
    import { push } from "svelte-spa-router";
    import { supabase } from "./supabaseClient";
    import { onMount } from "svelte";

    function generateRoomCode() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0; i < 4; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    onMount(async () => {
        const code = generateRoomCode();

        const { data, error } = await supabase
            .from("Rooms")
            .insert([{ room_code: code }])
            .select();

        if (error) {
            console.error("Error creating room:", error);
        } else {
            push(`/join-room/${code}`);
        }
    });
</script>
