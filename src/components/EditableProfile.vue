<!-- EditableProfile.vue -->

<template>
  <div style="
    border-radius: 10px;
    padding: 22px;
    margin: 30px;
    position: relative;
    left: 395px;
    width: 38%;
    box-shadow: rgba(230, 230, 230, 0.72) 10px 11px 12px 5px;
    background: rgb(247, 247, 247);">
    <h2>Mi Perfil</h2>
    <form @submit.prevent="updateProfile">
      <label for="name" style="padding: 15px;">Nombre: </label>
      <input v-model="editedProfile.name" type="text" id="name" required 
      style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
        <br>
        <br>

      <label for="birthday">Cumpleaños: </label>
      <input v-model="editedProfile.birthday" type="text" id="birthday" required 
      style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
        <br>
        <br>

      <label for="location" style="padding: 10px;">Ubicación: </label>
      <input v-model="editedProfile.location" type="text" id="location" required 
      style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;"/>
        <br>
        <br>

      <button type="submit" 
      style="margin-top: 10px;
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #9f9f9f;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;">Guardar Cambios</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedProfile: {
        name: "Bjork", // Puedes inicializar con tus datos actuales
        birthday: "01 de enero de 1990",
        location: "Ciudad de Mexico",
      },
    };
  },
  methods: {
    updateProfile() {
      // Lógica para guardar los cambios en tu perfil
      // Puedes enviar los datos al servidor, almacenarlos localmente, etc.
      console.log("Perfil actualizado:", this.editedProfile);
    },
  },
};
</script>
