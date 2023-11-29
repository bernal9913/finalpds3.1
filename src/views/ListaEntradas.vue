<template>
    <div style="
    border: solid 3px #2c3e50;
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;">
        <h2>Lista de entradas en espera de aprobación</h2>
        <ul>
            <li v-for="entrada in entradas" :key="entrada.id">
            <router-link :to="'/entrada/' + entrada.id">{{ entrada.titulo }}</router-link>
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
        console.log(entradasGuardadas)
        this.entradas = entradasGuardadas; 
    }
};
</script>