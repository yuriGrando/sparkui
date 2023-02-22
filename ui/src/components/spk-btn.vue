<template>
    <q-btn
        color="primary"
        outlined
        :icon="icon"
        :label="label"
    >

    </q-btn>
</template>

<script>
export default {
    name: "spk-btn",
    props: {
        icon: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>