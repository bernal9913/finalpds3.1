<template>
  <div class="privacy-popup">
    <div class="popup-content">
      <!-- Contenido del popup, como el aviso de privacidad y cookies -->
      <p>Aviso de privacidad y cookies</p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor pretium lobortis. Integer a pulvinar ligula. Vivamus blandit hendrerit turpis nec lacinia. Cras iaculis, nunc in sollicitudin fringilla, ex velit fermentum felis, varius laoreet purus.<br>
      <button @click="closePopup"
      style="margin-top: 10px;
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #9f9f9f;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.privacy-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fondo oscuro semi-transparente */
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 250px;
}
</style>
