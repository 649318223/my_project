import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/theme/index.scss'
function bootstrap() {
  const app = createApp(App);
  app.use(store);
  app.use(router);
  app.use(ElementPlus)
  app.mount("#app");
}
bootstrap();
