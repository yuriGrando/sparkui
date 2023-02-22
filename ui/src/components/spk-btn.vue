<template>
    <q-btn
        :label="label"
        color="primary"
        outline
        :icon="icon"
    />

</template>

<script>
export default {
    name: "spk-btn",
    props: {
        label: {
            type: String,
            required: true,
        },

        icon: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>