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
      <li v-for="user in filteredList" :key="user.id">
        <router-link :to="'/usuario/' + user.id">{{ user.name }}</router-link>
      </li>
    </ul>
    <p v-else></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      users: [
        {
          id: 1,
          name: "Vilma Dinkley",
          birthday:"01 de enero de 1990",
          photo: "https://via.placeholder/150",
          location: "Ciudad de Mexico"
        },
        {
          id: 2,
          name: "Rei Ayanami",
          birthday:"30 de marzo de 1996",
          photo: "https://via.placeholder/150",
          location: "Sinaloa"
        },
        {
          id: 3,
          name: "Mai Sakurajima",
          birthday:"2 de diciembre de 1999",
          photo: "https://via.placeholder/150",
          location: "Monterrey"
        },
        {
          id: 4,
          name: "Kanye West",
          birthday:"8 de junio de 1977",
          photo: "https://via.placeholder/150",
          location: "Hawaii"
        },
        {
          id: 5,
          name: "jungkook",
          birthday:"1 de septiembre de 1997",
          photo: "https://via.placeholder/150",
          location: "En alguna parte de corea del sur"
        },
        {
          id: 6,
          name: "Chuu",
          birthday:"20 de octubre de 1999",
          photo: "https://via.placeholder/150",
          location: "En alguna parte de corea del sur"
        }
      ],
    };
  },
  computed: {
    filteredList() {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      return this.users.filter((user) =>
          user.name.toLowerCase().includes(lowerCaseSearchTerm)
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
