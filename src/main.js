import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import commonComponents from './components';

import '@/style/element.scss';

if (process.env.NODE_ENV === 'development') {
  require('../mock');
}
Vue.config.productionTip = false;

Vue.use(commonComponents);

Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
