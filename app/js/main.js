'use strict';

var _app = require('@/app');

var _app2 = _interopRequireDefault(_app);

var _PostList = require('@/components/PostList');

var _PostList2 = _interopRequireDefault(_PostList);

var _UserInfo = require('@/components/UserInfo');

var _UserInfo2 = _interopRequireDefault(_UserInfo);

var _Article = require('@/components/Article');

var _Article2 = _interopRequireDefault(_Article);

var _SideBar = require('@/components/SideBar');

var _SideBar2 = _interopRequireDefault(_SideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new VueRouter({
    routes: [{
        path: '/',
        name: 'root',
        components: {
            main: _PostList2.default
        }
    }, {
        path: '/topic/:id&auther=:name',
        name: 'post_content',
        components: {
            main: _Article2.default,
            sidebar: _SideBar2.default
        }
    }, {
        path: '/user/:name',
        name: 'user_info',
        components: {
            main: _UserInfo2.default
        }
    }]
}); /**
     * Created by vita on 2018/5/21.
     */

new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App: _app2.default },
    data: {
        message: 'hello ...'
    }
});

Vue.filter('formatDate', function (str) {
    if (!str) return '';
    var date = new Date(str);
    var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return '';
    } else if (time / 1000 < 30) {
        return '刚刚';
    } else if (time / 1000 < 60) {
        return parseInt(time / 1000) + '秒前';
    } else if (time / 60000 < 60) {
        return parseInt(time / 60000) + '分钟前';
    } else if (time / 3600000 < 24) {
        return parseInt(time / 3600000) + '小时前';
    } else if (time / 86400000 < 31) {
        return parseInt(time / 86400000) + '天前';
    } else if (time / 2592000000 < 12) {
        return parseInt(time / 2592000000) + '月前';
    } else {
        return parseInt(time / 31536000000) + '年前';
    }
});
//# sourceMappingURL=main.js.map