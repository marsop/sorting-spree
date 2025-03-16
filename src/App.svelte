<script>
  import InitialPage from './InitialPage.svelte';
  import CardGenerator from './CardGenerator.svelte';
  import JoinRoom from './JoinRoom.svelte';
  import RoomLobby from './RoomLobby.svelte';
  import { supabase } from './supabaseClient';

  let currentPage = 'initial';
  let roomCode = undefined;

  function generateFriendlyId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  async function handleCreateRoom() {
    const code = generateFriendlyId();

    const { data, error } = await supabase
      .from('Rooms')
      .insert([{ friendly_id: code }])
      .select();

    if (error) {
      console.error('Error creating room:', error);
    }

    await joinRoom(code);
  }

  async function joinRoom(code) {
    console.log('Joining room:', code);
    currentPage = 'roomLobby';
    roomCode = code;
  }

  function navigateToJoinRoom() {
    currentPage = 'joinRoom';
  }
</script>

{#if currentPage === 'initial'}
  <InitialPage
    onCreateRoom={handleCreateRoom}
    onJoinRoom={navigateToJoinRoom}
  />
{:else if currentPage === 'joinRoom'}
  <JoinRoom onRoomCodeSelected={joinRoom} />
{:else if currentPage === 'roomLobby'}
  <RoomLobby {roomCode} />
{:else if currentPage === 'cardGenerator'}
  <CardGenerator />
{/if}
