<template>
    <button @click="$emit('add-point')" :disabled="disabled">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: String,
        disabled: Boolean
    }
}
</script>

<style>
button {
    margin: 5px;
    font-size: 16px;
    padding: 5px 10px;
}
</style>