<template>
  <div class="news-list">
    <div v-for="news in newsList" :key="news.id" class="news-card">
      <h2>{{ news.title }}</h2>
      <img :src="news.image" alt="News Image" class="news-image">
      <p>{{ news.content }}</p>
      <div class="comment-bar">
        <input type="text" v-model="commentInput" placeholder="Añadir comentario...">
        <button @click="addComment(news.id)">Comentar</button>
      </div>
      <div class="comments">
        <div v-for="comment in news.comments" :key="comment.id" class="comment">
          <p>{{ comment.text }}</p>
        </div>
      </div>
      <button @click="likeNews(news.id)">
        {{ news.likes }} Likes ❤️
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: "Gobierno de Sonora",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor pretium lobortis. Integer a pulvinar ligula. Vivamus blandit hendrerit turpis nec lacinia. Cras iaculis, nunc in sollicitudin fringilla, ex velit fermentum felis, varius laoreet purus.",
          image: require("../assets/Noticia1.jpg"),
          comments: [],
          likes: 0
        },
        {
          id: 2,
          title: "Chat GPT",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor pretium lobortis. Integer a pulvinar ligula. Vivamus blandit hendrerit turpis nec lacinia. Cras iaculis, nunc in sollicitudin fringilla, ex velit fermentum felis, varius laoreet purus.",
          image: require("../assets/Noticia2.jpg"),
          comments: [],
          likes: 0
        },
        {
          id: 3,
          title: "Conferencia",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor pretium lobortis. Integer a pulvinar ligula. Vivamus blandit hendrerit turpis nec lacinia. Cras iaculis, nunc in sollicitudin fringilla, ex velit fermentum felis, varius laoreet purus.",
          image: require("../assets/Noticia3.jpg"),
          comments: [],
          likes: 0
        },
        {
          id: 4,
          title: "Bard",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor pretium lobortis. Integer a pulvinar ligula. Vivamus blandit hendrerit turpis nec lacinia. Cras iaculis, nunc in sollicitudin fringilla, ex velit fermentum felis, varius laoreet purus.",
          image: require("../assets/Noticia4.jpg"),
          comments: [],
          likes: 0
        }
      ],
      commentInput: ""
    };
  },
  methods: {
    addComment(newsId) {
      const news = this.newsList.find(news => news.id === newsId);
      if (news) {
        news.comments.push({ id: Date.now(), text: this.commentInput });
        this.commentInput = "";
      }
    },
    likeNews(newsId) {
      const news = this.newsList.find(news => news.id === newsId);
      if (news) {
        news.likes++;
      }
    }
  }
};
</script>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}
.news-list {
  display: flex;
  flex-direction: column;
}

.news-card {
  margin-bottom: 20px;
  padding: 10px;
    border-radius: 10px;
    /* border: solid; */
    box-shadow: 10px 11px 12px 5px #e6e6e6b8;
    background: #f7f7f7;
    margin: 45px;
  /* Resto de los estilos... */
}
/*
.news-card {
    /* border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 10px 11px 12px 5px #e6e6e6b8;
    background: #f7f7f7;
}*/

.comment-bar {
  margin-top: 10px;
}

.comment-bar input {
    width: 80%;
    padding: 5px;
    margin-right: 10px;
    border-radius: 5px;
    border: none;
}

.comments {
  margin-top: 10px;
}

.comment {
  border-bottom: solid #e2e2e2;
  padding: 0px;
  margin-bottom: 5px;
  position: relative;
  /* border-radius: 5px; */
  width: 65%;
  left: 19%;
}

button {
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #9f9f9f;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  /* border: #f00; */
}

.news-image {
  width: 400px;
  height: auto;
  margin-bottom: 50px;
  border-radius: 8px;
}
</style>
