<template>
    <div>
        copy right 2021, {{appNameWithVersion}}
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Footer",
        computed: {
            ...mapGetters([
                'appNameWithVersion'
            ])
        }
    }
</script>

<style scoped>

</style>