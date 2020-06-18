<template>
  <v-container>
      <v-col v-for="article in this.articles" :key="article._id">
          <NewsCard v-bind:article="article"/>
      </v-col>
  </v-container>
</template>

<script>
import NewsCard from './NewsCard';
export default {
    components:{
        NewsCard
    },
    data: ()=>({
        articles: []
    }),
    created:()=>{
        this.articles = this.$store.getters.getFavorites;
        console.log('store', this.$store.getters.getFavorites);
        console.log('articles', this.articles);
    }
}
</script>

<style>

</style>