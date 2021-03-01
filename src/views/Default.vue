<template>
    <div>
        <img alt="Vue logo" src="@/assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        API: {{this.api}}
        <button @click="logout">退出</button>
    </div>
</template>

<script>
    import HelloWorld from "@/components/HelloWorld";

    export default {
        name: "Default",
        components: {
            HelloWorld
        },
        data() {
            return {
                api: process.env.VUE_APP_SERVICE_HOSTNAME
            };
        },
        methods: {
            logout() {
                this.$store.commit('user/LOGIN', false)
                this.$router.push({name: 'login'})
            }
        },
        // 组件路由
        beforeRouteEnter(to, from, next) {
            // 此时组件还未渲染，直接用this取不到数据，用下面形式
            next(vm => {
                console.log(vm)
            })
        },
        // 可以和上面的logout()函数结合来用
        beforeRouteLeave(to, from, next) {
            if (to.name === 'login') {
                const leave = confirm('您确定要退出吗')
                if (leave) next()
            } else {
                next()
            }
        }

    }
</script>

<style scoped>

</style>