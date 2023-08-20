import { createPinia } from 'pinia';
import { App } from 'vue';
import piniaPersist from 'pinia-plugin-persist'; //数据持久化

const store = createPinia();

const install = (app: App): void => {
  store.use(piniaPersist);

  app.use(store);
};

export default { install };
