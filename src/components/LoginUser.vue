<template>
  <div>
    <h2>Inicia sesión</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="credenciales.email" required />
      </div>

      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="credenciales.password" required />
      </div>

      <div>
        <button type="submit">Iniciar Sesión</button>
      </div>

      <div>
        <p>
          ¿No tienes una cuenta? <router-link to="/signup">Registrarse</router-link>
        </p>
        <p>
          <router-link to="/olvidar-contrasena">¿Olvidaste la contraseña?</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credenciales: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes realizar acciones como autenticar al usuario,
      // redirigir a la raíz, etc.
      console.log('Usuario autenticado:', this.credenciales);
      this.$router.push('/ajustes');
    }
  }
};
</script>
