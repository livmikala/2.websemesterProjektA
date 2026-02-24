<template>
  <div class="score-display">
    <p>{{ playerName }}: {{ score }}</p>
  </div>
</template>

<script>
export default {
  props: {
    playerName: String,
    score: Number
  }
}
</script>

<style scoped>
.score-display {
  font-size: 20px;
  margin: 10px 0;
}
</style>