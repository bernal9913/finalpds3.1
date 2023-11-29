<template>
  <div>
    <div>
      <img :src="user.photo" alt="Profile photo">
      <h2>{{ user.name }}</h2>
    </div>
    <div>
      <p><strong>Fecha de cumpleaños:: </strong> {{ user.birthday }}</p>
    </div>
  </div>
</template>
<script>
const users = [
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
]
export default {
  data(){
    return{
      user: null,
    };
  },
  created(){
    const userId = parseInt(this.$route.params.id);
    this.user = users.find(user => user.id === userId);
  },
}
</script>
<style scoped>
/* Estilos opcionales para dar estilo al componente */
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px;
}

img {
  max-width: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

h2 {
  margin: 0;
}
</style>