<template>
  <div>
      <p>{{msb}}</p>
      <button @click="msbemit">B组件按钮</button>
      <slot name="header">this is header</slot>
      <slot name="footer">this is footer</slot>
  </div>
</template>
<script>
export default{
    name:'b',
    data(){
        return{
            msb:'Hello,I am msb!'
        }
    },
    methods:{
        msbemit(){
            this.$emit('b-emit',this.msb)
        }
    }
}
</script>