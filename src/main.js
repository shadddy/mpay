// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Toast ,MessageBox} from 'mint-ui';
window.MessageBox=MessageBox

Vue.use(MintUI)

import { XButton, Swiper,AlertModule,Alert, Step, StepItem  } from 'vux'
Vue.component('x-button', XButton)
Vue.component('swiper', Swiper)
Vue.component('Alert', Alert)
Vue.component('step', Step)
Vue.component('step-item', StepItem)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



//语言切换包
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n=new VueI18n({
	locale:'cn',
	messages:{
		'cn':require('../static/js/cn'),
		'en':require('../static/js/en')
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
