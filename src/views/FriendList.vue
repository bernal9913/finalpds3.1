<template>
  <div style="
    border-radius: 10px;
    padding: 22px;
    margin: 5px;
    position: relative;
    left: 415px;
    width: 38%;
    margin-top: 50px;
    margin-bottom: 28px;
    box-shadow: rgba(230, 230, 230, 0.72) 10px 11px 12px 5px;
    background: rgb(247, 247, 247);">
    <h1>
    Lista de amigos
    </h1>
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
        }
      ]
    };
  }
};
</script>