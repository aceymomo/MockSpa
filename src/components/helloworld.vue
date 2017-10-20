<template>
  <div>
      <ul>
          <li v-for="item in items">{{item.name}} - {{item.price}} - {{item.id}}</li>
      </ul>
      <button @click="itemAdd">itemAdd</button>
  </div>
</template>
<script>
export default{
    name:'helloworld',
    data(){
        return{
            items:[
                {   
                    name:'kroos',
                    price:54,
                    id:1
                },
                {   
                    name:'froshb',
                    price:18,
                    id:2
                },
            ],
            obj:{
                style:14,
                craaz:'cuvee',
                color:'red'
            }
        }
    },
    methods:{
        itemAdd(){
            console.log(this.items)
        }
    }
}
</script>
<style>

</style>
