<template>
    <div style="
    border: solid 3px #2c3e50;
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;">
        <h2>Crear una nueva entrada</h2>
        <form @submit.prevent = "crearEntrada">
            <label for="titulo" style="padding: 22px;">Titulo: </label>
            <input type="text" v-model="nuevaEntrada.titulo"
            style="
                border: none;
                border-radius: 5px;
                box-shadow: 0px 2px 5px #a2a2a2;"><br>
            <br>
            <label for="contenido" style="padding: 5px;">Contenido: </label>
            <textarea v-model="nuevaEntrada.contenido" required 
            style="
                border: none;
                border-radius: 5px;
                box-shadow: 0px 2px 5px #a2a2a2;"></textarea><br>
                <br>
            <button type="submit" style="
            margin-top: 10px; 
            margin-left: 10px; 
            padding: 5px 10px;
            background-color: #9f9f9f;
            color: #fff;
            border: none;
            border-radius: 3px;">Publicar</button>
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