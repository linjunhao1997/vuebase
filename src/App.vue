<template>
  <div id="app">
    <div id="nav">
      <p> 在{{appName}}程序中，用户 {{username}} 是否登录：{{userHasLogin}}，当前时间：{{getTime}},设置程序名：<input v-model="appName"/></p>

      <router-link to="/">Home</router-link> |
      <!--路径-->
      <router-link to="/about">About</router-link> |
      <!--命名路由-->
      <router-link :to="{name: 'about'}">about</router-link>
    </div>
    <!--页面切换过渡效果-->
    <transition-group :name="transitionName">
      <router-view key="default" name="default"/>
      <router-view key="footer" name="footer"/>
    </transition-group>


  </div>
</template>

<script>
  import {mapActions, mapMutations, mapState} from 'vuex'
  import {timestampToTime} from "@/lib/util";
  import {getUserInfo} from "@/api/user";
export default {
  name: 'App',
  data() {
    return {
      transitionName: '',
      chineseStandardTime: 0,
      username: ''
    }
  },
  watch: {
    '$route' (to) {
      to.meta && to.meta.transitionName && (this.transitionName = to.meta.transitionName)
    }
  },
  computed: {
    // 获取store的方式
    //第一种
    /*
    appName() {
      return this.$store.state.appName
    },
    */
    //第二种
    /*
    ...mapState([
      'appName'
    ]),
    */
    // 第一个参数可以指定模块名
    ...mapState({
      //appName: state => state.appName,
      startTime: state => state.startTime,
      userHasLogin: state => state.user.hasLogin
    }),
    appName: {
      get() {
        return this.$store.state.appName
      },
      set(value) {
        this.SET_APP_NAME(value)
      }
    },
    ...mapActions([
      'GET_CHINESE_STANDARD_TIME'
    ]),
    getTime() {
      return timestampToTime(this.chineseStandardTime)
    }
  },
  mounted() {
     console.log("mounted")
     this.setChineseStandardTime()
     this.setInterval()
     this.getUserInfo()
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
  },
  methods: {

    ...mapMutations([
      'SET_APP_NAME'
    ]),
    setChineseStandardTime() {
      this.GET_CHINESE_STANDARD_TIME
      this.chineseStandardTime = this.startTime
    },
    setInterval() {
      this.timer = setInterval(() => {
        this.chineseStandardTime += 1000
      }, 1000)
    },
    getUserInfo() {
      getUserInfo().then(res => {
        this.username = res.data.username
      })
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.GET_CHINESE_STANDARD_TIME
  }
  /*
  mounted() {
   console.log("BASE_URL: ", process.env.BASE_URL);
    console.log("VUE_APP_SERVICE_HOSTNAME: ", process.env.VUE_APP_SERVICE_HOSTNAME);

  }*/
}
</script>

<style>
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 0.1s ease;
}
.router-enter-to {
  opacity: 1;
}

.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 0.1s ease;
}
.router-leave-to {
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
