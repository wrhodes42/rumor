import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'

createApp(App).use(router).mount('#app')

window.$ = window.jQuery = require('jquery');
window.$ = $.extend(require('jquery-ui'));
