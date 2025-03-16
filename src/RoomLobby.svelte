<script>
    import { onMount } from 'svelte';

    export let params = {};

    let roomCode = params?.roomCode;

    import { supabase } from './supabaseClient';

    let roomData = {};
    let roommies = undefined;
    let selectedRoomie = null;

    async function kickRoomie() {
        if (selectedRoomie) {
            let { data, error } = await supabase
                .from('Roommies')
                .delete()
                .eq('name', selectedRoomie)
                .eq('room_code', roomCode);

            if (error) {
                console.error('Error kicking roomie:', error);
            } else {
                console.log(`Roomie ${selectedRoomie} kicked!`, data);
                // Refresh the roommies list
                loadRoommies();
            }
        }
    }

    async function loadRoomData() {
        let { data, error } = await supabase
            .from('Rooms')
            .select('*')
            .eq('room_code', roomCode)
            .single();

        if (error) {
            console.error('Error loading room data:', error);
        } else {
            roomData = data;
        }
    }

    async function loadRoommies() {
        let { data, error } = await supabase
            .from('Roommies')
            .select('*')
            .eq('room_code', roomCode);

        if (error) {
            console.error('Error loading roommies:', error);
        } else {
            roommies = data;
        }
    }

    onMount(() => {
        loadRoomData();
        loadRoommies();
    });

</script>

<h1>This is the Lobby of room {roomCode}!</h1>

<p>Room Created at: {roomData.created_at}</p>

<h2>List of participants</h2>

<button on:click={kickRoomie} disabled={selectedRoomie === null}>Kick Roomie</button>

<select bind:value={selectedRoomie}>
    <option value={null} disabled>Select a roomie to kick</option>
    {#each roommies as roomie}
        <option value={roomie.name}>{roomie.name}</option>
    {/each}
</select>


<ul>
    {#if roommies}
        {#each roommies as roomie}
            <li>{roomie.name}</li>
        {/each}
    {:else}
        <li>No participants yet</li>
    {/if}
</ul>