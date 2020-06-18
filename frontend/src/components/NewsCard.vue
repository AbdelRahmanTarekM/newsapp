<template>
  <v-card dense>
    <v-card-title class="text-end">{{article.title}}</v-card-title>
    <v-card-subtitle class="text-right">{{article.author}}</v-card-subtitle>
    <v-card-subtitle class="text-right">{{article.publishedAt}}</v-card-subtitle>
    <v-card-text class="text-right">{{article.description}}</v-card-text>
    <v-img :src="article.urlToImage" height="300px"></v-img>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn text :href="article.url">visit</v-btn>
      <v-btn text @click="addToFavorites">Add To Favorites</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["article"],
  data: () => ({
  }),
  created: () => {
    
  },
  methods: {
    addToFavorites() {
      let data = {
        authToken: this.$store.getters.getAuthToken,
        urlToImage: this.article.urlToImage,
        title: this.article.title,
        author: this.article.author,
        publishedAt: this.article.publishedAt,
        description: this.article.description,
        url: this.article.url
      };
      fetch("http://localhost:3000/favorites/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    }
  }
};
</script>

<style>
</style>