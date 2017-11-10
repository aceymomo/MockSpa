<template>
  <div>
      <this-dialog :is-show="isShowCheckDialog">
          请检查你的支付状态！
          <el-button type="success">支付成功</el-button>
          <el-button type="danger">支付失败</el-button>
      </this-dialog>
      <this-dialog :is-show="isShowSuccessDialog">
          购买成功!
      </this-dialog>
      <this-dialog :is-show="isShowFailDialog">
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
        }
    },
    data(){
        return{
            isShowSuccessDialog:false,
            isShowFailDialog:false
        }
    }
}
</script>