<template>
    <div>
        {{ name }},关于本项目...
    </div>
</template>

<script>
    export default {
        name: "AboutWho",
        props: {
            name: {
                type: String,
                default: 'john'
            }
        },
        // 当动态路由参数改变时复用同个组件时触发
        // 存在父级情况下，父级组件也应该实现这个方法，否则不会触发
        beforeRouteUpdate(to, from, next) {
            console.log(to.name + "组件复用")
            next()
        }
    }
</script>

<style scoped>

</style>