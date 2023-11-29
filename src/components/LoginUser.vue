<template>
  <div style="
    border: solid 3px #2c3e50;
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;">
    <h2>Inicia sesión</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Correo Electrónico: </label>
        <input type="email" id="email" v-model="credenciales.email" required 
        style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
      </div>
      <br>
      
      <div>
        <label for="password" style="padding: 25px;">Contraseña: </label>
        <input type="password" id="password" v-model="credenciales.password" required 
        style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
      </div>

      <div>
        <br>
        <button type="submit"
        style="margin-top: 10px;
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #9f9f9f;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;">Iniciar Sesión</button>
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
