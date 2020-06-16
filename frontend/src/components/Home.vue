<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>
      </v-col>
    </v-row>
    <v-col xs12 sm8 md6>
      <v-card 
      flat
        v-for="(article, i) in articles"
        :key="i"
        class="d-flex flex-nowrap py-2 pa-6 align-self-center"
      >
        <NewsCard v-bind:article="article" />
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import NewsCard from "./NewsCard";
export default {
  name: "Home",
  components: {
    NewsCard
  },
  data() {
    return {
      articles: []
    };
  },
  created() {
    fetch("http://localhost:3000/eg")
      .then(response => response.json())
      .then(data => {
        // console.log(data.articles);
        this.articles = data.articles;
      });
  }
};
</script>
