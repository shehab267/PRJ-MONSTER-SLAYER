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
      winner: null,
      battleLogMsgs: [],
    };
  },
  computed: {
    playerStyleBar() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    monsterStyleBar() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    usingSpecialAttack() {
      return this.roundCounter % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        //Player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.pla <= 0) {
        // draw
        this.winner = "draw";
      } else if (value <= 0) {
        //Player lost
        this.winner = "player";
      }
    },
  },
  methods: {
    newGame() {
      this.roundCounter = 0;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.battleLogMsgs = [];
    },

    playerAttack() {
      const attackValue = randomNum(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMsg("player", "attack", attackValue);
      this.monsterAttack();
      this.roundCounter++;
      // console.log(`Monster Health: ${this.monsterHealth}`);
    },
    monsterAttack() {
      const attackValue = randomNum(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMsg("monster", "attack", attackValue);

      // console.log(`Player Health: ${this.playerHealth}`);
    },
    spcialAttack() {
      const attackValue = randomNum(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMsg("player", "attack", attackValue);
      this.monsterAttack();
      this.roundCounter++;
    },
    heal() {
      this.roundCounter++;
      const healValue = randomNum(15, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMsg("player", "heal", healValue);
      this.monsterAttack();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMsg(who, what, value) {
      this.battleLogMsgs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
