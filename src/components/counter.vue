<template>
  <div class="datep-box">
      <div class="datep-jia">
          <button @click="add">+</button>
      </div>
      <div class="datep-input">
          <input type="text" v-model="nowNumber" @keyup="fixNumber">
      </div>
      <div class="datep-jian">
          <button @click="remote">-</button>
      </div>
  </div>
</template>
<script>
export default{
    props:{
        max:{
            type:Number,
            default:5
        },
        min:{
            type:Number,
            default:1
        }
    },
    data(){
        return{
            nowNumber:this.min
        }
    },
    watch:{
        nowNumber(){
            this.$emit('on-change',this.nowNumber)
        }
    },
    methods:{
        fixNumber(){
            let fix
            if(typeof this.nowNumber === 'string'){
                fix = Number(this.nowNumber.replace(/\D/g,''))
            }else{
                fix = this.nowNumber
            }
            if(fix > this.max || fix < this.min){
                fix = this.min
            }
            this.nowNumber = fix
        },
        add(){
            if(this.nowNumber >= this.max){
                return this.max
            }else{
                return this.nowNumber ++
            }
        },
        remote(){
            if(this.nowNumber <= this.min){
                return this.min
            }else{
                return this.nowNumber --
            }
        }
    }
}
</script>
<style scoped>
.datep-box{
    display: flex;
    justify-content: flex-start;
}
.datep-jia button,.datep-jian button{
    width: 30px;
    height: 22px;
    background: #4fc08d;
    border: none;
    padding: 0;
    color:#fff;
}
.datep-input input{
    width: 40px;
}
</style>
