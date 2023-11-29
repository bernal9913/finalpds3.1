<template>
  <div
  style="
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
    Lista de followers
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
          id: 4,
          name: "Kanye West",
          birthday:"8 de junio de 1977",
          photo: "https://ibb.co/QNc3bHr",
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