<template>
  <div>
      <p>{{applemsg}}</p>
      <p>{{totalPrice}}</p>
      <button @click="countjia(5)">+5</button>
      <button @click="countjian(5)">-5</button>
      <br>
      <button @click="addjia(10)">+</button>
      <button @click="reducejia(10)">-</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default{
    data(){
        return {
            applemsg:'hello,I am apple!',
            price:5
        }
    },
    computed:{
        ...mapState(['totalPrice']),
        ...mapGetters(['totalPrice'])
    },
    methods:{
        ...mapMutations({
            countjia:'increament',
            countjian:'decreament'
        }),
        ...mapActions({
            addjia:'addCre',
            reducejia:'reduceCre'
        })
    }
}
</script>