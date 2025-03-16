<script>
    export let onCreateRoom;
    export let onJoinRoom;
  </script>
  
  <div>

    <h1>Welcome to SORTING SPREE!</h1>

    <ol>
      <li>This is a cooperative game played in rounds. Win 3 rounds as a team and you win the game. Lose 3 rounds and.. well, you lose ;-)</li>
      <li>Each round, a category will be chosen. It could be something like “Animals by size” or “Transports by speed” or “Vegetables by taste”</li>
      <li>Each player will be dealt a poker card `2`,`3`,`4` ,`5`,`6`,`7`,`8`,`9`,`10`,`J`,`Q`,`K`,`A`.</li>
      <li>Each player chooses and writes one item in that category according to the value of the card they have been dealt. For example, if the category is “animals by size” a `2` could be an ant, a `5` could be a mouse and a `K` could be an elephant</li>
      <li>The `A` is special, it can be the lowest card, but it can also be the highest. The player that has drawn the `A` can decide!</li>
      <li>A player is chosen at random to be the first player of the round. He places the phone on the middle of the table and explains his chosen item without revealing anything about his card</li>
      <li>One by one all the rest of the players will place their phones left or right so that a line of phones is sorted based on the expected values</li>
      <li>The players can discuss about the items and reorganize the phones, but no information about the cards can be shared</li>
      <li>When everybody agrees, the value of the cards is revealed</li>
      <li>If the phones have been ordered according to the cards, you win the round</li>
    </ol>

    <button on:click={onCreateRoom}>Create Room</button>
    <button on:click={onJoinRoom}>Join Room</button>
  </div>
  
  <style>
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 80vh;
    }
  
    button {
      margin: 10px;
      padding: 10px 20px;
      font-size: 16px;
    }
  </style>