<template>
  <div class="choose-box">
      <ul class="choose-main">
          <li v-for="(item,index) in selections" @click="chooseRed(index)" :class="{active:index === nowIndex}">{{item.label}}</li>
      </ul>
  </div>
</template>
<script>
export default{
    data(){
        return{
            nowIndex:0
        }
    },
    props:{
        selections:{
            type:Array,
            default:[{
                label:'test',
                value:0
            }]
        }
    },
    methods:{
        chooseRed(index){
            this.nowIndex = index
            this.$emit('on-choose',this.nowIndex)
        }
    }
}
</script>
<style scoped>
.choose-box{
    
}
.choose-main{
    display: flex;
    justify-content: flex-start;
}
.choose-main li{
    padding: 0 8px;
    height: 25px;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
    text-align: center;
    line-height: 25px;
    margin-right: 10px;
    cursor: pointer;
}
.active{
    background: #4fc08d;
    color:#fff;
}
</style>
