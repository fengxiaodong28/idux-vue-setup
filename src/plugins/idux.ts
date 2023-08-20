import type { App } from 'vue';

import '@idux/cdk/index.css';
// 如果不需要 reset 全局样式和滚动条样式，移除下面 2 行代码
import '@idux/components/style/core/reset.default.css';
import '@idux/components/style/core/reset-scroll.default.css';

import { createGlobalConfig } from '@idux/components/config';

// 动态加载图标：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载
const loadIconDynamically = (iconName: string) => {
  return fetch(`/idux-icons/${iconName}.svg`).then((res) => res.text());
};

const globalConfig = createGlobalConfig({
  // 默认为中文，可以打开注释设置为其他语言
  // locale: enUS,
  icon: { loadIconDynamically }
});

const install = (app: App): void => {
  app.use(globalConfig);
};

export default { install };
