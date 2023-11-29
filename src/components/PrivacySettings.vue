<template>
  <div class="privacy-toggles">
    <div class="toggle">
      <span class="label">Perfil público</span>
      <label class="switch">
        <input type="checkbox" />
        <div class="slider"></div>
      </label>
    </div>

    <div class="toggle">
      <span class="label">Mostrar actividad</span>
      <label class="switch">
        <input type="checkbox" />
        <div class="slider"></div>
      </label>
    </div>
    <button @click="guardarYRedirigir">Guardar</button>
  </div>
</template>
<script>
export default {
  methods: {
    guardarYRedirigir() {
      alert('Ajustes guardados.');
      this.$router.push('/');
    }
  }
};
</script>
<style>

button {
margin-top: 10px;
padding: 8px 16px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>