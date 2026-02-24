<template>
 <div class="scoreboard">
    <h2>Tennis Score</h2>
    <ScoreDisplay playerName="Spiller 1" :score="player1"/>
    <ScoreDisplay playerName="Spiller 2" :score="player2"/>
    <ScoreButton label="Spiller 1" :disabled="gameOver" @add-point="addPointPlayer1"/>
    <ScoreButton label="Spiller 2" :disabled="gameOver" @add-point="addPointPlayer2"/>
    <ScoreButton label="Reset" @add-point="resetGame"/>
    <p v-if="winner">Resultat: {{ winner }}</p>
 </div>
</template>
<script>
import ScoreButton from './ScoreButton.vue'
import ScoreDisplay from './ScoreDisplay.vue';

export default {
    components: { ScoreButton, ScoreDisplay },
    data () {
      return {
        player1: 0,
        player2: 0,
        gameOver: false,
        winner: null
    }
},

methods: {
    addPointPlayer1() { 
        if(!this.gameOver) {
            this.player1++
            this.checkWinner()
        }
     },
    addPointPlayer2() {
        if(!this.gameOver) {
            this.player2++
            this.checkWinner()
        }
    },
    resetGame() {
        this.player1 = 0
        this.player2 = 0
        this.gameOver = false
        this.winner = null
    },
    checkWinner() {
        if (this.player1 >= 6 && this.player1 - this.player2 >= 2) {
        this.gameOver = true
        this.winner = 'Spiller 1 vinder!'
      } else if (this.player2 >= 6 && this.player2 - this.player1 >= 2) {
        this.gameOver = true
        this.winner = 'Spiller 2 vinder!'
      } else if (this.player1 === 11 && this.player2 === 11) {
        this.gameOver = true
        this.winner = 'Uafgjort!'
      }
    }    
 }
}
</script>

<style scoped>
.scoreboard {
    background-color: green;
    color: white;
    padding: 20px;
    border-radius: 10px;
}
</style>