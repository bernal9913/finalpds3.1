<template>
  <div>
    <h2>Olvidé la Contraseña</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

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
