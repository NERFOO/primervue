<template>
    <div>
        <h1>Metodos Filters</h1>

        <ul>
            <li v-for="name in nombres" :key="name">{{$filters.mayuscula(name)}}</li>
        </ul>
        <ul>
            <li v-for="num in numeros" :key="num">{{$filters.getnumeroDoble(num)}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "MetodosFilters" ,
    data() {
        return {
            nombres : ["Jaime", "Ina", "Javier", "Santi", "Laura", "Nerfo"],
            numeros : [5, 11, 25, 7, 3]
        }
    }
}
</script>

<style>

</style>