<template>
    <div>
        <h2>Crear una nueva entrada</h2>
        <form @submit.prevent = "crearEntrada">
            <label for="titulo">Titulo: </label>
            <input type="text" v-model="nuevaEntrada.titulo"><br>
            <br>
            <label for="contenido">Contenido: </label>
            <textarea v-model="nuevaEntrada.contenido" required></textarea><br>
            <button type="submit">Publicar</button>
        </form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            nuevaEntrada:{
                titulo:'',
                contenido: ''
            }
        };
    },
    methods:{
        crearEntrada(){
            const entradaId = Date.now().toString();
            this.nuevaEntrada.id = entradaId;
            const entradasGuardadas = JSON.parse(localStorage.getItem('entradas')) || [];
            entradasGuardadas.push(this.nuevaEntrada);
            localStorage.setItem('entradas', JSON.stringify(entradasGuardadas));
            this.$emit('nueva-entrada', this.nuevaEntrada);
            this.nuevaEntrada = { titulo: '', contenido: ''};
        }
    }
};
</script>