<template>
  <div style="
    border: solid 3px #2c3e50;
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;">
    <h2>Formulario de Registro</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nombre" style="padding: 38px;">Nombre: </label>
        <input type="text" id="nombre" v-model="usuario.nombre" required
        style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
      </div>
      <br>

      <div>
        <label for="email">Correo Electrónico: </label>
        <input type="email" id="email" v-model="usuario.email" required 
        style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
      </div>
      <br>

      <div>
        <label for="birthday" style="padding: 21px;">Cumpleaños: </label>
        <input type="text" id="birthday" v-model="usuario.birthday" required 
        style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
      </div>
      <br>
      <div>
        <label for="password" style="padding: 25px;">Contraseña: </label>
        <input type="password" id="password" v-model="usuario.password" required 
        style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
      </div>
      <br>

      <button type="submit"
      style="margin-top: 10px;
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #9f9f9f;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;">Registrarse</button>
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
