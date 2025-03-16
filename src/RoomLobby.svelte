<script>
    export let roomCode;

    import { supabase } from './supabaseClient';

    let roomData = {};

    async function loadRoomData() {
        let { data, error } = await supabase
            .from('Rooms')
            .select('*')
            .eq('friendly_id', roomCode)
            .single();

        if (error) {
            console.error('Error loading room data:', error);
        } else {
            roomData = data;
        }
    }

    loadRoomData();

</script>

<h1>This is the Lobby of room {roomCode}!</h1>

<p>Room Created at: {roomData.created_at}</p>