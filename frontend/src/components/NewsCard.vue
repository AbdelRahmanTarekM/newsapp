<template>
  <v-card class="mx-auto">
    <v-img :src="article.urlToImage" height="200px"></v-img>

    <v-card-title class="text-right">{{article.title}}</v-card-title>

    <v-card-subtitle class="text-right">{{article.author}}</v-card-subtitle>

    <v-divider></v-divider>

    <v-card-text class="text-right">{{article.description}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["article"]
};
</script>

<style>
</style>