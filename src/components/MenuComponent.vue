<template>
    <div>
        <h1>Menu Component</h1>
        <ul id="menu" style="display:flex; flex-wrap: wrap">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/cine">Cine</router-link></li>
            <li><router-link to="/musica">Musica</router-link></li>
            <li><router-link to="/hooks">Hooks</router-link></li>
            <li><router-link to="/directivas">Directivas</router-link></li>
            <li><router-link to="/conmutada">Conmutada</router-link></li>
            <li><router-link to="/filter">Filter</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : "MusicaComponent"
    }
</script>

<style scoped>
    ul#menu li{
        display: inline;
        margin: 0 20px;
    }
</style>