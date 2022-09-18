// Js function
// - Random Number
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Vue App
const app = Vue.createApp({
  data() {
    return {
      roundCounter: 0,
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    playerStyleBar() {
      return { width: this.playerHealth + "%" };
    },
    monsterStyleBar() {
      return { width: this.monsterHealth + "%" };
    },
    usingSpecialAttack() {
      return this.roundCounter % 3 !== 0;
    },
  },
  methods: {
    playerAttack() {
      const attackValue = randomNum(5, 12);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      this.roundCounter++;
    },
    monsterAttack() {
      const attackValue = randomNum(8, 15);
      this.playerHealth -= attackValue;
      console.log(`Player Health: ${this.playerHealth}`);
    },
    spcialAttack() {
      const attackValue = randomNum(10, 25);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      this.roundCounter++;
    },
    heal() {
      this.roundCounter++;
      const healValue = randomNum(12, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.monsterAttack();
    },
  },
});

app.mount("#game");
