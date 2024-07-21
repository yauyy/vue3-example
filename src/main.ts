import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import 'element-plus/dist/index.css';
import IconsVue from './components/icons-vue';
import 'element-plus/theme-chalk/dark/css-vars.css';
import './styles/element/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(IconsVue);
app.use(router);

app.mount('#app');
