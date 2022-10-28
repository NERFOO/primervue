import { createApp } from 'vue';
import App from './App.vue';

//IMPORTAMOS LA CONSTANTE DE ROUTER.JS
import router from './Router';

createApp(App).use(router).mount('#app')
