import { createApp } from "vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from './router/router.js';
import store from './store/index.js'



const app = createApp(App);

app.use(store);

app.use(router);

app.mount("#app");
