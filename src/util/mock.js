import Mock from 'mockjs'
export default Mock.mock('/api', {
    'newList': [{
            title: '数据统计',
            url: 'http://starcraft.com'
        },
        {
            title: '数据预测',
            url: 'http://warcraft.com',
            hot: true
        },
        {
            title: '流量分析',
            url: 'http://overwatch.com',
            hot: true
        },
        {
            title: '广告发布',
            url: 'http://hearstone.com'
        }
    ],
    'login': {
        'username': 'yundong',
        'userid': 123456
    }
})