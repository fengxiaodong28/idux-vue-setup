import { createApp } from 'vue';
import store from './store';
import { idux } from './plugins';
import router from './router';
import request from './request/create';
import { initAxios } from './request';
import App from './App.vue';

initAxios(request);

createApp(App).use(store).use(router).use(idux).mount('#app');
