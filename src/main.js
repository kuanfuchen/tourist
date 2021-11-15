import { createApp } from 'vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import "./assets/scss/utils/_variables.scss";
import VueAxios from 'vue-axios';
// import jssha from 'jssha';
import App from './App.vue';
import router from './router';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';

import { faSun,faCloudSun,faCloud,faCloudRain,faMapMarkerAlt,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// fontawecomeicon

library.add(faSun,faCloudSun,faCloud,faCloudRain,faMapMarkerAlt,faAngleLeft,faAngleRight);
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false

const appVue = createApp(App);
appVue.component('font-awesome-icon', FontAwesomeIcon);
appVue.use(VueAxios,axios);
// appVue.use(jssha);
appVue.use(router);


appVue.mount('#app')