<!-- EditableProfile.vue -->

<template>
  <div>
    <h2>Mi Perfil</h2>
    <form @submit.prevent="updateProfile">
      <label for="name">Nombre:</label>
      <input v-model="editedProfile.name" type="text" id="name" required />

      <label for="birthday">Cumpleaños:</label>
      <input v-model="editedProfile.birthday" type="text" id="birthday" required />

      <label for="location">Ubicación:</label>
      <input v-model="editedProfile.location" type="text" id="location" required />

      <button type="submit">Guardar Cambios</button>
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
