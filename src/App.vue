<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    API: {{ api }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      api: process.env.VUE_APP_SERVICE_HOSTNAME
    };
  },
  mounted() {
    console.log("BASE_URL: ", process.env.BASE_URL);
    console.log("VUE_APP_SERVICE_HOSTNAME: ", process.env.VUE_APP_SERVICE_HOSTNAME);
    fetch("/xproject/weixinUser/list", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(function(res){
      return res.json();
    }).then(function(stories){
      console.log(stories)
    }).then(function(err){
      console.log(err)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
