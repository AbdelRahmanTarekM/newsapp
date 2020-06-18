<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>
        News App
        </h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
      :hidden="this.hide"
        text
        href="/login"
      >
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn text href="/register">Register</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
   },
  data: () => ({
    authToken: null,
    hide: true
  }),
  computed:()=>{
    this.authToken = this.$store.getters.getAuthToken;
  }
};
</script>
