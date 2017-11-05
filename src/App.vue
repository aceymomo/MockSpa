<template>
  <div id="app">
    
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  name: 'app',
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
