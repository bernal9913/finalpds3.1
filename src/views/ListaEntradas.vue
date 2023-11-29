<template>
    <div style="
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;
    margin-top: 50px;
    margin-bottom: 28px;
    box-shadow: rgba(230, 230, 230, 0.72) 10px 11px 12px 5px;
    background: rgb(247, 247, 247);">
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