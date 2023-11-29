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
    <h2>Olvidé la Contraseña</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Correo Electrónico: </label>
        <input type="email" id="email" v-model="email" required 
        style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
      </div>
      <br>

      <div>
        <button type="submit" 
        style="margin-top: 10px;
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #9f9f9f;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;">Enviar Correo de Restablecimiento</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    submitForm() {
      // Lógica para enviar un correo de restablecimiento, etc.
      console.log('Solicitud de restablecimiento para:', this.email);
      // Puedes agregar lógica adicional según tus necesidades.
      this.$router.push('/');
    }
  }
};
</script>
