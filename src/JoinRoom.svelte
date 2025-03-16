<script>
  export let params = {};

  import { supabase } from "./supabaseClient";
  import { push } from "svelte-spa-router";

  let roomCode = params?.roomCode ?? undefined;

  let username = undefined;

  async function tryJoinRoom() {
    const { data, error } = await supabase
      .from("Roommies")
      .insert([{ room_code: roomCode, name: username }])
      .select();

    if (error) {
      console.error("Error joining room:", error);
    } else {
      push(`/room/${roomCode}`);
    }
  }
</script>

<div>
  <h1>Join Room</h1>

  {#if roomCode?.length !== 4}
    <p style="color: red;">Room code must be exactly 4 characters long</p>
  {/if}
  <input
    type="text"
    bind:value={roomCode}
    placeholder="Enter code"
    on:input={(e) => (roomCode = e.target.value.toUpperCase())}
  />

  {#if username === undefined || username.trim() === ""}
    <p style="color: red;">Username cannot be empty</p>
  {/if}
  <input type="text" bind:value={username} placeholder="Enter username" />

  <button
    on:click={tryJoinRoom}
    disabled={!roomCode ||
      roomCode.length !== 4 ||
      !username ||
      username.trim() === ""}>Join</button
  >
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  input {
    margin: 10px;
    padding: 10px;
    font-size: 16px;
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
  }
</style>
