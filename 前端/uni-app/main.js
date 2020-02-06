import Vue from 'vue'
import App from './App'

// import basics from './pages/basics/home.vue'
// Vue.component('basics',basics)

// import components from './pages/component/home.vue'
// Vue.component('components',components)

// import plugin from './pages/plugin/home.vue'
// Vue.component('plugin',plugin)

import uniFab from '@/components/uni-fab/uni-fab.vue';//悬浮按钮插件
Vue.component('uniFab',uniFab)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import UniPopup from './components/uni-popup/uni-popup.vue'
Vue.component('UniPopup',UniPopup)

import mSearch from '@/components/mehaotian-search-revision/mehaotian-search-revision.vue';
Vue.component('mSearch',mSearch)

//顶部导航栏
import hxNavbar from "@/components/hx-navbar/hx-navbar.vue"
Vue.component('hxNavbar',hxNavbar)

import index from "@/pages/index/index.vue"
Vue.component('index',index)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



