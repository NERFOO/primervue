import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';
import DirectivasComponent from './components/DirectivasComponent.vue';
import PropiedadConmutada from './components/PropiedadConmutada.vue';
import MetodosFilters from './components/MetodosFilters.vue';

const misRutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/musica", component: MusicaComponent
    },
    {
        path: "/cine", component: CineComponent
    },
    {
        path: "/hooks", component: CicloVida
    },
    {
        path: "/directivas", component: DirectivasComponent
    },
    {
        path: "/conmutada", component: PropiedadConmutada
    },
    {
        path: "/filter", component: MetodosFilters
    }
]

//CREAMOS UNA CONSTANTE, QUE CONTENDRA LAS RUTAS Y EL HISTORIAL
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS
const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
});

//POR ULTIMO EXPORTAMOS
export default router;