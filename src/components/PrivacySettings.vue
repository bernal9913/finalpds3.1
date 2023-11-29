<template>
  <div class="privacy-toggles" style="
    border: solid 3px #2c3e50;
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;">
    
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
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #9f9f9f;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>