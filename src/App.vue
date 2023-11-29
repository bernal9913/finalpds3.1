<template>
  <div>
    <nav>
      <SearchList/>
      <router-link to="/">Home</router-link> |
      <!--<router-link to="/ContactCard">Contact Card Test</router-link> | -->
      <router-link to="/NuevaEntrada">Nueva publicación</router-link> |
      <router-link to="/entradas">Publicaciónes</router-link> |
      <router-link to="/Chat">Chat</router-link> |
      <router-link to="/amigos">Amigos</router-link> |
      <router-link to="/followers">Seguidores</router-link> |
      <router-link to="/login">Iniciar sesion</router-link> |
      <MyProfile/>
    </nav>
    <router-view/>
    <PrivacyPopup v-if="showPrivacyPopup" @close="closePrivacyPopup" />
    <div>
      <router-link to="/about">Sobre nosotros</router-link>
    </div>
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
import PrivacyPopup from "@/components/PrivacyPopup.vue";
import SearchList from "@/views/SearchList.vue";
import MyProfile from "@/components/MyProfile.vue";

export default {
  components: {
    MyProfile,
    PrivacyPopup,
    SearchList,
  },
  data() {
    return {
      showPrivacyPopup: true, // Controla la visibilidad del popup
    };
  },
  methods: {
    closePrivacyPopup() {
      this.showPrivacyPopup = false;
    },
  },
};
</script>