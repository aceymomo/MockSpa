<template>
  <div class="reg-box">
      <div class="reg-user">
          <span class="reg-mad">用户名：</span>
          <input type="text" v-model="username" placeholder="请输入用户名">
          <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="reg-user">
          <span class="reg-mad">密码：</span>
          <input type="password" v-model="password" placeholder="请输入密码">
          <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="reg-user">
          <span class="reg-mad">邮箱：</span>
          <input type="email" v-model="emails" placeholder="请输入邮箱">
          <span class="g-form-error">{{emailError.errorText}}</span>
      </div>
      <div class="reg-user">
          <button>注册</button>
      </div>
      <p></p>
  </div>
</template>
<script>
export default{
    data(){
        return {
            username:'',
            errorText:'',
            password:'',
            emails:''
        }
    },
    computed: {
        userErrors(){
            let errorText,status
            if(!/@/g.test(this.username)){
                errorText = '不包含@'
                status = false
            }else{
                errorText = ''
                status = true
            }
            return{
                errorText,status
            }
        },
        passwordErrors(){
            let errorText,status
            if(!/^\w{1,6}$/g.test(this.password)){
                errorText = '密码位数不正确'
                status = false
            }else{
                errorText = ''
                status = true
            }
            return{
                errorText,status
            }
        },
        emailError(){
            let errorText,status
            if(!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g.test(this.emails)){
                errorText = 'email地址不正确'
                status = false
            }else{
                errorText = ''
                status = true
            }
            return{
                errorText,status
            }
        }
    },
    methods:{

    }
}
</script>