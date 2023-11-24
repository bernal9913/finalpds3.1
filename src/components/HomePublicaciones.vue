<template>
  <div class="news-grid">
    <div v-for="news in newsList" :key="news.id" class="news-card">
      <h2>{{ news.title }}</h2>
      <img :src="news.image" alt="News Image" class="news-image">
      <p>{{ news.content }}</p>
      <div class="comment-bar">
        <input type="text" v-model="commentInput" placeholder="Add a comment">
        <button @click="addComment(news.id)">Add Comment</button>
      </div>
      <div class="comments">
        <div v-for="comment in news.comments" :key="comment.id" class="comment">
          <p>{{ comment.text }}</p>
        </div>
      </div>
      <button @click="likeNews(news.id)">
        {{ news.likes }} Likes
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
          title: "News 1",
          content: "This is the content of news 1",
          image: require("../assets/Noticia1.jpg"),
          comments: [],
          likes: 0
        },
        {
          id: 2,
          title: "News 2",
          content: "This is the content of news 2",
          image: require("../assets/Noticia2.jpg"),
          comments: [],
          likes: 0
        },
        {
          id: 3,
          title: "News 3",
          content: "This is the content of news 3",
          image: require("../assets/Noticia3.jpg"),
          comments: [],
          likes: 0
        },
        {
          id: 4,
          title: "News 4",
          content: "This is the content of news 4",
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
  gap: 20px;
}

.news-card {
  border: 1px solid #ccc;
  padding: 10px;
}

.comment-bar {
  margin-top: 10px;
}

.comment-bar input {
  width: 100%;
  padding: 5px;
  margin-right: 10px;
}

.comments {
  margin-top: 10px;
}

.comment {
  border: 1px solid #ccc;
  padding: 5px;
  margin-bottom: 5px;
}

button {
  margin-top: 10px;
}

.news-image {
  width: 400px;
  height: auto;
  margin-bottom: 50px;
}
</style>
