<script>
  import InitialPage from "./Rules.svelte";
  import CardGenerator from "./CardGenerator.svelte";
  import JoinRoom from "./JoinRoom.svelte";
  import RoomLobby from "./RoomLobby.svelte";
  import { supabase } from "./supabaseClient";
  import { onMount } from "svelte";

  let roomCode = undefined;
  let user = null;
  


 

  async function joinRoom(code, username) {
    console.log(`Joining room: ${code} with username: ${username}`);
    currentPage = "roomLobby";
    roomCode = code;
  }


</script>

{#if currentPage === "initial"}
  <InitialPage
    onCreateRoom={handleCreateRoom}
    onJoinRoom={navigateToJoinRoom}
  />
{:else if currentPage === "joinRoom"}
  <JoinRoom {roomCode} onJoinRoomRequested={joinRoom} />
{:else if currentPage === "roomLobby"}
  <RoomLobby {roomCode} />
{:else if currentPage === "cardGenerator"}
  <CardGenerator />
{/if}
