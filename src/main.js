import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faAngleDown, faArrowRight, faHeart, faPoundSign } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate'
import './registerServiceWorker'

library.add(faShoppingCart, faAngleDown, faArrowRight, faHeart, faPoundSign, faFacebookF, faInstagram, faTwitter, faPinterest)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
