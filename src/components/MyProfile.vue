<!-- ProfileLink.vue -->

<template>
  <router-link :to="{ name: 'editable-profile' }">
    <img src="../assets/pikachu.png" alt="Imagen de Perfil" class="profile-image" />
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "URL_DE_TU_IMAGEN_DE_PERFIL",
    };
  },
};
</script>

<style scoped>
.profile-image {
  width: 50px; /* Ajusta el tamaño de acuerdo a tus necesidades */
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
