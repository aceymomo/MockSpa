<template>
  <div>
      <div class="app-head">
          <div class="app-head-inner">
              <router-link :to="{path:'/'}">
                <img src="../assets/logo.png" alt="logo">
              </router-link>
              <div class="head-nav">
                  <ul class="nav-list">
                      <li>{{username}}</li>
                      <li v-if="username !== ''" class="nav-pile">|</li>
                      <li v-if="username === ''" @click="logclick">登录</li>
                      <li v-if="username === ''" class="nav-pile">|</li>
                      <li v-if="username === ''" @click="regclick">注册</li>
                      <li v-if="username === ''" class="nav-pile">|</li>
                      <li v-if="username !== ''" @click="logclose">退出</li>
                      <li v-if="username !== ''" class="nav-pile">|</li>
                      <li @click="aboutclick">关于</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="app-content">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </div>
      <div class="app-foot">
          <p>2016 fishenal MIT</p>
      </div>
      <my-dialog :is-show="isShowAboutDialog" @on-close="closeindex('isShowAboutDialog')">
                <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
      </my-dialog>
      <my-dialog :is-show="isShowLogDialog" @on-close="closeindex('isShowLogDialog')">
          <log-form @has-log="onSuccess"></log-form>
      </my-dialog>
      <my-dialog :is-show="isShowRegDialog" @on-close="closeindex('isShowRegDialog')">
          <reg-form @reg-hot="onRegSuc"></reg-form>
      </my-dialog>
  </div>
</template>
<script>
import Dialog from '@/components/dailog'
import logForm from '@/components/logform'
import regForm from '@/components/regform'
export default{
    data(){
        return{
            isShowAboutDialog:false,
            isShowLogDialog:false,
            isShowRegDialog:false,
            username:''
        }
    },
    components:{
        myDialog:Dialog,
        logForm,
        regForm
    },
    methods:{
        aboutclick(){
            this.isShowAboutDialog = true
        },
        logclick(){
            this.isShowLogDialog = true
        },
        regclick(){
            this.isShowRegDialog = true
        },
        closeindex(attr){
            this[attr] = false
        },
        onSuccess(data){
            console.log(data)
            this.closeindex('isShowLogDialog')
            this.username = data.username
        },
        onRegSuc(data){
            this.onRs = setTimeout(()=>{
                this.closeindex('isShowRegDialog')
                this.username = data.username
                this.$router.push({path:'/'})
            },5000)
        },
        logclose(){
            this.username = ''
        }
    }
}
</script>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head{
    height: 90px;
    background:#363636;
    width: 100%;
    color: #b2b2b2;
}
.app-head-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
}
.app-head-inner img{
    width: 50px;
    height: 50px;
    margin-left: 20px;
}
.head-nav{
    margin-right: 20px;
}
.nav-list{
    display: flex;
}
.nav-list li{
    padding-left: 5px;
}
.app-foot{
    height: 80px;
    width: 100%;
    background: #e3e4e8;
    display: flex;
    align-items: center;
    justify-content: center;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
.reg-user{
    padding: 15px 0;
}
.reg-user input{
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
}
.reg-user button{
    width: 80px;
    height: 40px;
    background: #4fc08d;
    color:#fff;
    border:none;
    margin-left: 100px;
}
.reg-mad{
    display: inline-block;
    width: 100px;
    font-size: 16px;
}
.reg-suc{
    display: flex;
    justify-content: center;
}
.reg-suc p{
    font-size: 24px;
    color:#4fc08d;
}
.reg-suc span{
    font-size: 18px;
    color:#000;
}
</style>
