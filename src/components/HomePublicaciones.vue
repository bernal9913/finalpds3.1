<template>
  <div class="grid-container">
    <div class="grid-item" v-for="news in dummyNews" :key="news.id">
      <img :src="news.image" alt="News Image" class="news-image" />
      <h3 class="news-title">{{ news.title }}</h3>
      <p class="news-description">{{ news.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dummyNews: [
        {
          id: 1,
          title: "Dummy News 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: require("../assets/Noticia1.jpg")
        },
        {
          id: 2,
          title: "Dummy News 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: require("../assets/Noticia2.jpg")
        },
        {
          id: 3,
          title: "Dummy News 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "path/to/image3.jpg"
        },
        {
          id: 4,
          title: "Dummy News 4",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "path/to/image4.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-item {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
}

.news-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.news-title {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

.news-description {
  margin-top: 5px;
  font-size: 14px;
}
</style>
