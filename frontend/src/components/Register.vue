<template>
  <v-container class="justify-center" fluid px-12 mb-3 mt-3>
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="name" :counter="16" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-date-picker
        v-model="date"
        full-width
        :landscape="$vuetify.breakpoint.smAndUp"
        class="mt-4"
      ></v-date-picker>
      <v-card-actions class="justify-end">
        <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Register</v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 16) || "Name must be less than 16 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    date: new Date().toISOString().substr(0, 10)
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      let data = {name: this.name, email: this.email, birthdate: this.date};
    //   console.log("name", this.name, "email", this.email, "date", this.date);
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(data => {
            if(data.success){
                this.$router.push({name: 'login'})
            }
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