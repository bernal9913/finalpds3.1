<template>
  <nav>
    <SearchList/>
    <search-list/>
    <router-link to="/">Home</router-link> |
    <router-link to="/ContactCard">Contact Card Test</router-link> |
    <router-link to="/NuevaEntrada">Nueva publicación</router-link> |
    <router-link to="/entradas">Publicaciónes</router-link> |
    <router-link to="/Chat">Chat</router-link> |
    <router-link to="/amigos">Amigos</router-link> |
    <router-link to="/followers">Seguidores</router-link> |
    <router-link to="/login">Iniciar sesion</router-link> |
  </nav>
  <router-view/>
  <div>
    <SearchList />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import searchList from "@/views/SearchList.vue";
export default {
  components:{
    searchList,
  }
}
</script>