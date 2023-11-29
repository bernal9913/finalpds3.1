<template>
  <h1>
    Lista de followers
  </h1>
  <div>
    <ul>
      <li v-for="amigo in amigos" :key="amigo.id">
        <router-link :to="'/usuario/' + amigo.id">{{ amigo.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  data(){
    return{
      amigos:[
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
    };
  }
};
</script>