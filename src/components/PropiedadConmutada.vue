<template>
    <div>
        <h1>Propiedad conmutada</h1>
        <ul>
            <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "PropiedadConmutada" ,
    computed : {
        //UNA PROPIEDAD CONMUTADA SIEMPRE DEVUELVE VALORES VALORES Y NO PUEDE RECIBIR PARAMETROS
        juegosRojos() {
            var datos = this.juegos;
            //RECORREMOS LOS JUEGOS Y LOS DEVOLVEMOS EN COLOR ROJO
            for ( var i = 0; i < datos.length; i++) {
                var juego = datos[i];
                juego = "<span style='color:red'>" + juego + "</span>";
                datos[i] = juego;
            }
            return datos;
        }
    },
    data() {
        return {
            juegos : ["COD", "GI", "GTAV", "NFS", "F1"]
        }
    }
}
</script>

<style>

</style>