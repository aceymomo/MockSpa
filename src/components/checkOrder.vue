<template>
  <div>
      <this-dialog :is-show="isShowCheckDialog" @on-close="toOrderList">
          请检查你的支付状态！
          <el-button type="success" @click="checkStatus">支付成功</el-button>
          <el-button type="danger" @click="checkStatustwo">支付失败</el-button>
      </this-dialog>
      <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
          购买成功!
      </this-dialog>
      <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
          购买失败!
      </this-dialog>
  </div>
</template>
<script>
import Dialog from '@/components/dailog'
export default{
    components:{
        thisDialog:Dialog
    },
    props:{
        isShowCheckDialog:{
            type:Boolean,
            default:false
        },
        orderId:{
            type:[String,Number]
        }
    },
    data(){
        return{
            isShowSuccessDialog:false,
            isShowFailDialog:false
        }
    },
    methods:{
        checkStatus(){
            this.$http.post('/api/checkOrder',{
                orderId:this.orderId
            })
            .then(res=>{
                this.isShowSuccessDialog = true
                this.$emit('on-close-check-dialog')
            })
            .catch(error=>{
                console.log(error)
            })
        },
        checkStatustwo(){
            this.$http.post('/api/checkOrder',{
                orderId:this.orderId
            })
            .then(res=>{
                this.isShowFailDialog = true
                this.$emit('on-close-check-dialog')
            })
            .catch(error=>{
                console.log(error)
            })
        },
        toOrderList(){
            this.$router.push({path:'/orderList'})
        }
    }
}
</script>