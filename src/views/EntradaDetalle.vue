<template>
    <div>
        <h2>Entrada test</h2>
        <h2>{{ entrada.titulo }}</h2>
        <p>{{ entrada.contenido }}</p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            entrada: {}
        };
    },
    mounted(){
        const entradaId = this.$route.params.id;
        const entradasGuardadas = JSON.parse(localStorage.getItem('entradas')) || [];
        this.entrada = entradasGuardadas.find(entrada => entrada.id === entradaId) || {};
    }
}
</script>