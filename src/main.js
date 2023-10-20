import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from 'vant';
import PrimeVue from 'primevue/config';



const app = createApp(App);
import router from './router/router.js'
createApp(App).use(router).mount('#app')
app.use(Icon);
app.use(PrimeVue,{ prefix: "p" });
import 'vant/lib/index.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";

