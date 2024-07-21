import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import type { App } from 'vue';

function createApp(app: App) {
  // const app = createApp(App);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}

export default {
  install: createApp,
};
