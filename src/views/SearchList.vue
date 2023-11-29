<!-- SearchList.vue -->

<template>
  <div>
    <img alt="Vue logo" src="../assets/Logo2.png" width="150" length="150" style="position: absolute;left: 9px;top: -15px;">
    <input v-model="searchTerm" placeholder="Buscar..." @input="filterList" 
    style="
        border: none;
        border-radius: 5px;
        box-shadow: 0px 2px 5px #a2a2a2;
        width: 400px;"/>
    <ul v-if="searchTerm">
      <li v-for="item in filteredList" :key="item.id">{{ item.text }}</li>
    </ul>
    <p v-else>No hay término de búsqueda.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      dummyData: [
        { id: 1, text: "Lorem Ipsum 1" },
        { id: 2, text: "Lorem Ipsum 2" },
        { id: 3, text: "Lorem Ipsum 3" },
        // Agrega más entradas según sea necesario
      ],
    };
  },
  computed: {
    filteredList() {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      return this.dummyData.filter((item) =>
          item.text.toLowerCase().includes(lowerCaseSearchTerm)
      );
    },
  },
  methods: {
    filterList() {
      // Método para filtrar la lista según la búsqueda
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales para dar estilo al componente */
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

input {
  margin-bottom: 10px;
  padding: 5px;
}
</style>
