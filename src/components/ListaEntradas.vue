<template>
    <div>
        <h2>Lista de entradas</h2>
        <ul>
            <li v-for="entrada in entradas" :key="entrada.id">
            <router-link :to="'/entrada' + entrada.id">{{ entrada.titulo }}</router-link>
        </li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return {
            entradas:[]
        };
    },
    mounted(){
        const entradasGuardadas = JSON.parse(localStorage.getItem('entradas')) || [];
        this.entradas = entradasGuardadas; 
    }
};
</script>