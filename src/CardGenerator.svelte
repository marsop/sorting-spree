<script>
  let cardSrc = '';

  function generateCard() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const cards = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'jack',
      'queen',
      'king',
      'ace',
    ];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    cardSrc = `images/${randomCard}_of_${randomSuit}.png`;
  }
</script>

<div>
  <button on:click={generateCard}>Generate Card</button>
  <div id="cardDisplay">
    {#if cardSrc}
      <img
        src={cardSrc}
        alt="Your Card"
      />
    {/if}
  </div>
</div>

<style>
  #cardDisplay {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #cardDisplay img {
    max-height: 200px;
    height: auto;
  }
</style>
