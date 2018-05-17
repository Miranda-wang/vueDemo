/**
 * Created by benben on 18/4/17.
 */
window.$ = window.jQuery = require('jquery');
import VueRouter from 'vue-router';
import 'vue-multiselect/dist/vue-multiselect.min.css';

import App from './app.vue';
import Home from './home/home.vue';

window.toastr = require('toastr/build/toastr.min.css');
window.toastr = require('toastr/build/toastr.min.js');

window.innerHeight = 800;

window.toastr.options = {
    positionClass: "toast-top-full-width",
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};
// 以下为注册的全局方法
// Vue.prototype.remove = function (arr, item){
//     var result=[];  
//     for(var i=0; i<arr.length; i++){  
//     if(arr[i]!=item){  
//         result.push(arr[i]);  
//         //console.log(result);
//         // console.log("itemid"+item);
//         }  
//     };  
//  return result;  
// }

Vue.use(VueRouter);

let router = new VueRouter({
	routes:[
	{path:'/',component:Home}
	]}
)
new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
