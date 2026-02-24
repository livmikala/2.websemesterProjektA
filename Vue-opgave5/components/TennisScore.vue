<template>
<div>
 <ScoreButton
  label="+1 Spiller 1"
  :disabled="gameOver"
  @add-point="addPointPlayer1"
  />

 <ScoreButton
  label="+1 Spiller 2"
  :disabled="gameOver"
  @add-point="addPointPlayer2"
  />

 <ScoreButton
  label="Reset"
  @add-point="resetGame"
 />
</div>
</template>
<script>
import ScoreButton from './ScoreButton.vue'

export default {
    components: { ScoreButton },

data () {
    return {
        score1: 0,
        score2: 0,
        gameOver: false
    }
},

methods: {
    addPointPlayer1() { this.score1++ },
    addPointPlayer2() { this.score2++ },
    resetGame() {
        this.score1 = 0
        this.score2 = 0
        this.gameOver = false
    }
}
}
</script>