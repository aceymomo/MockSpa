<template>
  <div class="mchoose-box">
      <ul class="mchoose-main">
          <li v-for="(item,index) in selections" @click="multcheck(index)" :class="{active:checkActive(index)}">{{item.label}}</li>
      </ul>
  </div>
</template>
<script>
import _ from 'lodash'
export default{
    data(){
        return{
            nowIndexes:[0]
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
        multcheck(index){
            if(this.nowIndexes.indexOf(index) === -1){
                this.nowIndexes.push(index)
            }else{
                this.nowIndexes = _.remove(this.nowIndexes,(idx)=>{
                    return idx !== index
                })
            }
            this.$emit('on-change',this.nowIndexes)
        },
        checkActive(index){
            return this.nowIndexes.indexOf(index) !== -1
        }
    }
}
</script>
<style scoped>
.mchoose-main{
    display: flex;
    justify-content: flex-start;
}
.mchoose-main li{
    height: 25px;
    padding: 0 8px;
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
