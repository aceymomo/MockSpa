<template>
  <div id="app">
    <input type="text" v-model="myVal">
    <component-a @my-emit="mybesocl" :my-val="myVal"></component-a>
    <img src="./assets/logo.png">
    <component-b @b-emit="mybesoc2">
      <p slot="header">xxxx header</p>
      <p slot="footer">xxxx footer</p>
    </component-b>
    <button @click="show = !show">toggle</button>
    <router-view/>
    <transition name="fade">
      <div :is="currentcom"></div>
    </transition>
    <button @click="togglecom">切换组件</button>
  </div>
</template>

<script>
import componentA from '@/components/a'
import componentB from '@/components/b'
export default {
  components:{ componentA,componentB },
  data(){
    return {
      myVal:'',
      show:true,
      currentcom:'componentA'
    }
  },
  name: 'app',
  methods:{
    mybesocl(parafrom){
      console.log('mybesocl' + parafrom)
    },
    mybesoc2(hello){
      console.log('mybesoc2' + hello)
    },
    togglecom(){
      if(this.currentcom === 'componentA'){
        this.currentcom = 'componentB'
      }else{
        this.currentcom = 'componentA'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
  transform: translateX(-500px);
}
.fade-leave-active{
  transform: translateX(500px);
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: all .5s ease-out;
}
</style>
