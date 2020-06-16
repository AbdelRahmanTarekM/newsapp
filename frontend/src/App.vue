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
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn
        href='/register'
        target="_blank"
        text
      >
        <span class="mr-2">Register</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <Home/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Home from './components/Home';

export default {
  name: 'App',

  components: {
    // Home,
   },
  data: () => ({
    //
  }),
};
</script>
