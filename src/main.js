import { createApp } from 'vue';
import App from './App.vue';

//IMPORTAMOS LA CONSTANTE DE ROUTER.JS
import router from './Router';

var app = createApp(App);
//DEBEMOS INCLUIR LOS METODOS FILTERS COMO GLOBALES PARA LA APLICACION
app.config.globalProperties.$filters = {
    //AQUI LOS METODOS/FILTERS GLOBALES PARA LA APP
    mayuscula(dato) {
        return dato.toUpperCase();
    },
    getnumeroDoble(numero) {
        return numero * 2;
    }
}
app.use(router).mount('#app');
