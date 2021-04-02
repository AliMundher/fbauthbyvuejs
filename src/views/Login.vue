<template>
  <v-container>
    <!-- This is Title of Login -->
    <v-row justify="center">
      <v-col cols="12" md="5">
        <h2 class="grey--text mt-4 font-weight-bold">Login</h2>
        <h1 v-if="error">{{ error.message }}</h1>
      </v-col>
    </v-row>
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
          <v-btn
            outlined
            text
            @click.prevent="login"
            class="grey--text"
            :loading="loading"
            >Log In</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { auth } from "../fb";

export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false,
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true;
          auth
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              setTimeout(() => this.redirect(), 1000);
            });
        } catch (er) {
          this.error = er.message();
        }
      }
    },
    redirect() {
      this.$router.push({ name: "Home" });
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
