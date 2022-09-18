// Js function
// - Random Number
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Vue App
const app = Vue.createApp({
  data() {
    return {
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
  },
  methods: {
    playerAttack() {
      const attackValue = randomNum(5, 12);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      console.log(`Monster Health: ${this.monsterHealth}`);
    },
    monsterAttack() {
      const attackValue = randomNum(8, 15);
      this.playerHealth -= attackValue;
      console.log(`Player Health: ${this.playerHealth}`);
    },
  },
});

app.mount("#game");
