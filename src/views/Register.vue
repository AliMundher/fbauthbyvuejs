<template>
  <v-container>
    <!-- This is Title of Register -->
    <v-row justify="center">
      <v-col cols="12" md="5">
        <h2 class="grey--text mt-4 font-weight-bold">Register</h2>
      </v-col>
    </v-row>
    <!-- Start Form -->
    <v-form ref="form">
      <v-row justify="center" class="mt-4">
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            v-model="password"
            label="Password"
            ref="password"
            :rules="[(name) => !!password || 'This is Required']"
          />
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-4">
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            v-model="email"
            label="Email"
            ref="email"
            :rules="[(email) => !!email || 'This is Required']"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="5">
          <v-btn outlined text @click.prevent="register" class="grey--text"
            >Register</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
    <!-- End Form -->
  </v-container>
</template>

<script>
import { auth } from "../fb";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      route: "/register",
    };
  },
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            console.log(cred.user);
            setTimeout(() => this.redirect(), 1000);
          });
      }
    },
    redirect() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped></style>
