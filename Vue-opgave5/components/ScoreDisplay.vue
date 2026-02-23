<template>
    <div>
        <p>Spiller 1: {{ score1 }}</p>
        <p>Spiller 2: {{ score2 }}</p>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        score1: Number,
        score2: Number,
        message: String
    }
}
</script>

<style>
p { font-size: 18px; }
</style>