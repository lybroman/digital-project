// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import 'bulma/css/bulma.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueCarousel from 'vue-carousel';
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ElementUI, { locale })
Vue.use(VueCarousel)

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
      sss: 'www.baidu.com'
    }
  },
  template: '<div>' +
  '<a v-bind:href="url" class="nav-link" >' +
  '</a></div>'
})

const i18n = new VueI18n({
  locale: 'zh-CN',
  // switch via this.$i18n.locale
  messages: {
    'zh-CN': require('./common/lang/zh'),
    'en-US': require('./common/lang/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
