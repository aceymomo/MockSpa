<template>
  <div class="index-wrap">
    <div class="index-left">
        <div class="index-left-block">
            <h2>全部产品</h2>
            <h3>PC产品</h3>
            <ul>
                <li v-for="item in productList.pc.list">
                    <a :href="item.url">{{item.name}}</a>
                </li>
            </ul>
            <div class="hr"></div>
            <h3>应用类</h3>
            <ul>
                <li v-for="item in productList.app.list">
                    <a :href="item.url">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="index-left-block lastest-news">
            <h2>最新消息</h2>
            <ul></ul>
        </div>
    </div>
    <div class="index-right">
        
        <div class="index-board-list">

        </div>
    </div>
  </div>
</template>
<script>
export default{
    data(){
        return{
            productList:{
                pc:{
                    title:'PC产品',
                    list:[
                        {
                        name: '数据统计',
                        url: 'http://starcraft.com'
                        },
                        {
                        name: '数据预测',
                        url: 'http://warcraft.com'
                        },
                        {
                        name: '流量分析',
                        url: 'http://overwatch.com',
                        hot: true
                        },
                        {
                        name: '广告发布',
                        url: 'http://hearstone.com'
                        }
                    ]
                },
                app:{
                    title:'手机应用类',
                    list:[
                        {
                        name: '91助手',
                        url: 'http://weixin.com'
                        },
                        {
                        name: '产品助手',
                        url: 'http://twitter.com',
                        hot: true
                        },
                        {
                        name: '智能地图',
                        url: 'http://maps.com'
                        },
                        {
                        name: '团队语音',
                        url: 'http://phone.com'
                        }
                    ]
                }
            }
        }
    }
}
</script>
<style scoped>

</style>
