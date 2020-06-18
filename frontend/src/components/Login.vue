<template>
  <v-container class="justify-center" fluid px-12 mb-3 mt-3>
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        @click:append="show = !show"
      ></v-text-field>
      <v-card-actions class="justify-end">
        <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Login</v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: true,
    show: false,
    password: "",
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.email, this.password);
      let data = { email: this.email, password: this.password };
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
            if(data.authToken){
                this.$store.commit("setAuthToken", data.authToken);
                this.$store.commit("setFavorites",data.favorites);
                this.$router.push({name: 'home'});
            }
          console.log(data);
        });
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>