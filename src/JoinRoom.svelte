<script>
  export let onRoomCodeSelected;

  let roomCode = undefined;

  function joinRoom() {
    console.log(`Room "${roomCode}" joined`);
    onRoomCodeSelected(roomCode);
  }
</script>

<div>
  <h1>Join Room</h1>
  <input type="text" bind:value={roomCode} placeholder="Enter code" />
  <button on:click={joinRoom}>Join</button>
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
