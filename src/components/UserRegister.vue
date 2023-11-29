<template>
  <div>
    <h2>Formulario de Registro</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="usuario.nombre" required />
      </div>

      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="usuario.email" required />
      </div>

      <div>
        <label for="birthday">Cumpleaños:</label>
        <input type="text" id="birthday" v-model="usuario.birthday" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="usuario.password" required />
      </div>

      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: '',
        email: '',
        birthday:'',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Usuario registrado:', this.usuario);
      this.$router.push('/login');
      // Lógica adicional, como enviar datos al servidor, debería ir aquí.
    }
  }
};
</script>
