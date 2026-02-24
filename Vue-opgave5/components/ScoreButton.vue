<template>
  <button :disabled="disabled" @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: String,
    disabled: Boolean
  },
  methods: {
    handleClick() {
      this.$emit('add-point') // sender event til forælder
    }
  }
}
</script>

<style scoped>
button {
  background-color: white;
  color: black;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>