<template>
    <div>
        <h1>Hooks VUE</h1>
        <button @click="cambiarSaludo()">Mostrar saludo</button>
        <h2 style="color:blue">{{saludo}}</h2>
    </div>
</template>

<script>
export default {
    name : "CicloVida" ,
    data() {
        return {
            saludo : "Hoy es juernes"
        }
    },
    methods : {
        //AQUI INCLUIMOS NUESTROS METODOS PERSONALIZADOS
        cambiarSaludo() {
            //TODA VARIABLE O METODO DEBEMOS LLAMARLO CON this
            this.saludo = "Y mañana viernes!!!";
        }
    },
    mounted() {
        console.log("Componente montado");
    },
    created() {
        console.log("Componente creado");
    },
    unmounted() {
        console.log("Componente destruido");
    },
    updated() {
        console.log("Componente modificado");
    }
}
</script>

<style>

</style>