<template>
    <div>
        <h1>Mi primer componente VUE!!!</h1>
        <h2>Nombre: {{nombre}}</h2>
        <h2>Numero: {{numero}}</h2>
        <img src="./../assets/images/img1.jpg" alt="foto"/>
    </div>
</template>

<script>
    //SIEMPRE DEBEMOS EXPORTAR EL NOMBRE DEL COMPONENTE EN EL SCRIPT
    export default {
        name : "HolaMundo",
        data() {
            //AQUI DENTRO DEBEMOS DEVOLVER LAS VARIABLES A UTILIZAR EN EL COMPONENTE
            return {
                nombre : "Jaime" ,
                numero : 11 ,
                miArray : []
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: blue
    }
    @import './../assets/css/estilosvue.css';
</style>