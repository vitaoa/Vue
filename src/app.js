/**
 * Created by vita on 2018/5/21.
 */

import cnHeader from './common/header.vue';

const router=new VueRouter({
    routes: [
        {
            path: '/',
            name: 'root',
            components: {
            }
        },
    ]
});
const vm = new Vue({
    el:'#app',
    router,
    components:{
        cnHeader,
    },
    data:{
        message:'hello ...'
    }
});
