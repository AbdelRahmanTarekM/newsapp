<template>
  <v-container>
    <v-col>
      <h1>Egypt Sports News</h1>
      <v-divider></v-divider>
      <v-carousel light height="500" hide-delimiters>
        <v-carousel-item v-for="(article, i) in articlesEgSports" :key="i">
          <NewsCard v-bind:article="article" />
        </v-carousel-item>
      </v-carousel>
      <h1>Egypt Business News</h1>
      <v-divider></v-divider>
      <v-carousel light height="500" hide-delimiters>
        <v-carousel-item v-for="(article, i) in articlesEgBusiness" :key="i">
          <NewsCard v-bind:article="article" />
        </v-carousel-item>
      </v-carousel>
      <h1>UAE Sports News</h1>
      <v-divider></v-divider>
      <v-carousel light height="500" hide-delimiters>
        <v-carousel-item v-for="(article, i) in articlesAeSports" :key="i">
          <NewsCard v-bind:article="article" />
        </v-carousel-item>
      </v-carousel>
      <h1>UAE Business News</h1>
      <v-divider></v-divider>
      <v-carousel light height="500" hide-delimiters>
        <v-carousel-item v-for="(article, i) in articlesAeBusiness" :key="i">
          <NewsCard v-bind:article="article" />
        </v-carousel-item>
      </v-carousel>
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
      articlesEgSports: [],
      articlesEgBusiness: [],
      articlesAeSports: [],
      articlesAeBusiness: [],
    };
  },
  async mounted() {
    this.fetchUrl("eg", "sports").then(response => response.json()).then(data=>this.articlesEgSports = data.articles);
    this.fetchUrl("eg", "business").then(response => response.json()).then(data=>this.articlesEgBusiness = data.articles);
    this.fetchUrl("ae", "sports").then(response => response.json()).then(data=>this.articlesAeSports = data.articles);
    this.fetchUrl("ae", "business").then(response => response.json()).then(data=>this.articlesAeBusiness = data.articles);
  },
  methods: {
    fetchUrl(country, category) {
      // let arr = new Array();
      let data = { country, category };
      return fetch("http://localhost:3000/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      // console.log(arr);
      // return arr;
    }
  }
};
</script>
