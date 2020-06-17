<template>
  <v-card dense>
    <v-card-title class="text-end">{{article.title}}</v-card-title>
    <v-card-subtitle class="text-right">{{article.author}}</v-card-subtitle>
    <v-card-text class="text-right">{{article.description}}</v-card-text>
    <v-img :src="article.urlToImage" height="300px"></v-img>
    <v-divider></v-divider>
    <v-card-actions>
        <v-btn text :href="article.url">
            visit
        </v-btn>
    </v-card-actions>




  </v-card>
</template>

<script>
export default {
  props: ["article"]
};
</script>

<style>
</style>