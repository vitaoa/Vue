/**
 * Created by vita on 2018/5/21.
 */

import App from '@/app';
import PostList from '@/components/PostList';
import UserInfo from '@/components/UserInfo';
import Article from '@/components/Article';
import SideBar from '@/components/SideBar'

const router=new VueRouter({
    routes: [
        {
            path: '/',
            name: 'root',
            components: {
                main:PostList
            }
        },
        {
            path:'/topic/:id&auther=:name',
            name:'post_content',
            components:{
                main:Article,
                sidebar:SideBar
            },
        },
        {
            path:'/user/:name',
            name:'user_info',
            components:{
                main:UserInfo,
            }
        }
    ]
});
new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: { App },
    data:{
        message:'hello ...'
    }
});

Vue.filter('formatDate', function(str) {
    if (!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
})
