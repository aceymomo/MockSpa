<template>
  <div>
      <p>{{msg}}</p>
      <p>{{number}}</p>
      <p>{{myVal}}</p>
      <button @click="msgA">emit</button>
  </div>
</template>
<script>
export default{
    props:{
        'number':Number,
        'my-val':[Number,String],
    },
    data(){
        return{
            msg:'I am component A!'
        }
    },
    methods:{
        msgA(){
            this.$emit('my-emit',this.msg)
        }
    }
}
</script>
<style>

</style>
