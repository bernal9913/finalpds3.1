<template>
  <div style="
    border: solid 3px #2c3e50;
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;">
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
        <button type="submit">Enviar Correo de Restablecimiento</button>
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
