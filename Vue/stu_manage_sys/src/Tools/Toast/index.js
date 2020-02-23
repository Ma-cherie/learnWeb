import Vue from 'vue';
import toast from "./index.vue";

const Toast = Vue.extend(toast);

export default function (msg = '一条信息') {
    const app = new Toast({
        // 这样写，最终就是替换这个create出来的div，而不是页面上的元素
        el: document.createElement('div'),
        data() {
            return {
                msg: msg,
                show: true, //控制显示
                flag: true, //控制动画
            }
        }
    })
    document.body.appendChild(app.$el);
    setTimeout(() => {
        app.flag = false;
    }, 1500);
    setTimeout(() => {
        app.show = false;
    }, 2000);
}