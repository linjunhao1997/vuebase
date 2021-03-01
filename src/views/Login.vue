<template>
    <div>
        登录页
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "Login",
        methods: {
            ...mapMutations('user',[
                'LOGIN'
            ]),
            login() {
                // this.$store.commit('user/login', true)
                this.LOGIN(true)
                this.$router.push({name: 'default'})
            }
        }
    }
</script>

<style scoped>

</style>