<template>
    <div>
       {{$route.params.name || "您好"}},关于本项目{{what}}...
    </div>
</template>

<script>
    export default {
        name: "About",
        props: {
            what: {
                type: String,
                default: 'nothing'
            }
        },
        // 当动态路由参数改变时复用同个组件时触发
        // history模式下，此方法失效
        beforeRouteUpdate(to, from, next) {
            console.log(to.name + "组件复用")
            next()
        }
    }
</script>

<style scoped>

</style>